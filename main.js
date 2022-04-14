/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/batmfa__.ttf */ "./src/fonts/batmfa__.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/carlos-vega-7XbxPUdRtgw-unsplash.jpg */ "./src/images/carlos-vega-7XbxPUdRtgw-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'space';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n:root {\n    --text-color: #6311fc;\n    --tabs-color: #9d9a9e;\n    --content-color:#006408; \n    --tabs-color-clicked: #7a787a;\n    --tabs-color-hover:#c1bdc2;\n    --tabs-height: 2rem;\n    --tabs-width: 7rem;\n}\nbody, html {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center 5% fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: var(--text-color);\n    font-family: 'space', sans-serif;\n    margin: 0;\n    padding: .5rem;\n    text-shadow:\n    -2px   -2px white,\n    -2px -1.5px white,\n    -2px   -1px white,\n    -2px -0.5px white,\n    -2px    0px white,\n    -2px  0.5px white,\n    -2px    1px white,\n    -2px  1.5px white,\n    -2px    2px white,\n    -1.5px  2px white,\n    -1px    2px white,\n    -0.5px  2px white,\n    0px     2px white,\n    0.5px   2px white,\n    1px     2px white,\n    1.5px   2px white,\n    2px     2px white,\n    2px   1.5px white,\n    2px     1px white,\n    2px   0.5px white,\n    2px     0px white,\n    2px  -0.5px white,\n    2px    -1px white,\n    2px  -1.5px white,\n    2px    -2px white,\n    1.5px  -2px white,\n    1px    -2px white,\n    0.5px  -2px white,\n    0px    -2px white,\n    -0.5px -2px white,\n    -1px   -2px white,\n    -1.5px -2px white;\n}\n.buttonWrapper {\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\nheader {\n    display: flex;\n    gap: 7rem;\n    flex-direction: column;\n    text-align: center;\n    font-size: 2rem;\n}\n a {\n     color:var(--text-color);\n     text-decoration: none;\n }\n #content{\n     overflow: scroll;\n    text-shadow: none;\n   display: flex;\n   justify-content: center;\n   align-items: center; \n   margin-top: 1rem;\n   color: var(--content-color);\n   background-color:rgba(0, 0,0, 0.8);\n   padding-bottom: 1rem;\n   width: 400px;\n}\n.buttonClickable, .buttonClicked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:black;\n    font-size: 1rem;\n    background: var(--tabs-color);\n    font-family: 'space',sans-serif;\n    width: var(--tabs-width);\n    height: var(--tabs-height);\n    border: solid 3px var(--text-color);\n}\n.buttonClicked {\n    background-color: var(--tabs-color-clicked);\n    box-shadow: 0 0 25px #65aef1;\n\n}\n.buttonClickable:hover {\n    background-color: var(--tabs-color-hover);\n}\n.buttonClickable:active {\n    background: var(--tabs-color-clicked);\n}\n.buttonClickable {\n    cursor: pointer;\n  }\n.ufo {\n    position: absolute;\n    top: 3rem;\n}\n  @media(max-height:700px) {\n    .ufo {\n        width: 80px;\n        height: 80px;\n        position: absolute;\n        top: 3rem;\n    }\n    header {\n        gap: 4rem\n\n    }    \n  }\n  footer {\n    margin-top:5vh;\n    padding-bottom: .5rem;\n    text-align: center;\n    width: 100vw;\n    height: fit-content;\n}\nh1:after {\n    margin-top: 0.5rem;\n    display: block;\n    border-style: solid;\n    content: \" \";\n    width: 100%;\n    height: 0.2rem;\n    border: none;\n    background-color: var(--content-color);\n}\n.paragraphIntroduction div{\n    margin: 0 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    width: 350px;\n    border-right: solid .15rem var(--content-color);\n}\n.paragraphIntroduction div:nth-child(1){\n    animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    ;\n    -webkit-animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    ;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n\n}\n.paragraphIntroduction div:nth-child(2)\n{\n    opacity: 0;\n    animation:\n        typing2 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing2 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation-fill-mode: forwards; \n    animation-fill-mode: forwards;\n    animation-delay: 3s;\n    -webkit-animation-delay: 3s;\n}\n .paragraphIntroduction div:nth-child(3) {\n    opacity: 0;\n    animation:\n        typing3 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing3 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 6.0s;\n    -webkit-animation-delay: 6.0s;\n\n}\n.paragraphIntroduction div:nth-child(4) {\n    opacity: 0;\n    animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 9s;\n    -webkit-animation-delay: 9s;\n}\n.paragraphIntroduction div:nth-child(5) {\n    opacity: 0;\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 12s;\n    -webkit-animation-delay: 12s; \n\n}\n.paragraphIntroduction div:nth-child(6) {\n    opacity: 0;\n    border-right: solid .15rem var(--content-color);\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 15s;\n    -webkit-animation-delay: 15s; \n} \n\n\n\n@keyframes typing1 {\n     0%{\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n    }\n\n    90%{\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        width:350px;\n        border: none;\n    }\n}\n@keyframes typing2 {\n    0% {\n        width:0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing3 {\n    0% {\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing4 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    65% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100%{\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing5 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing6 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border-right: solid .15rem var(--content-color);\n    }    \n}\n@keyframes blink-caret {\n    from, to { border-color: transparent}\n    50% {border-color: var(--content-color);}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'space';\n    src: url(./fonts/batmfa__.ttf);\n}\n:root {\n    --text-color: #6311fc;\n    --tabs-color: #9d9a9e;\n    --content-color:#006408; \n    --tabs-color-clicked: #7a787a;\n    --tabs-color-hover:#c1bdc2;\n    --tabs-height: 2rem;\n    --tabs-width: 7rem;\n}\nbody, html {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: url(\"./images/carlos-vega-7XbxPUdRtgw-unsplash.jpg\") no-repeat center 5% fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: var(--text-color);\n    font-family: 'space', sans-serif;\n    margin: 0;\n    padding: .5rem;\n    text-shadow:\n    -2px   -2px white,\n    -2px -1.5px white,\n    -2px   -1px white,\n    -2px -0.5px white,\n    -2px    0px white,\n    -2px  0.5px white,\n    -2px    1px white,\n    -2px  1.5px white,\n    -2px    2px white,\n    -1.5px  2px white,\n    -1px    2px white,\n    -0.5px  2px white,\n    0px     2px white,\n    0.5px   2px white,\n    1px     2px white,\n    1.5px   2px white,\n    2px     2px white,\n    2px   1.5px white,\n    2px     1px white,\n    2px   0.5px white,\n    2px     0px white,\n    2px  -0.5px white,\n    2px    -1px white,\n    2px  -1.5px white,\n    2px    -2px white,\n    1.5px  -2px white,\n    1px    -2px white,\n    0.5px  -2px white,\n    0px    -2px white,\n    -0.5px -2px white,\n    -1px   -2px white,\n    -1.5px -2px white;\n}\n.buttonWrapper {\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\nheader {\n    display: flex;\n    gap: 7rem;\n    flex-direction: column;\n    text-align: center;\n    font-size: 2rem;\n}\n a {\n     color:var(--text-color);\n     text-decoration: none;\n }\n #content{\n     overflow: scroll;\n    text-shadow: none;\n   display: flex;\n   justify-content: center;\n   align-items: center; \n   margin-top: 1rem;\n   color: var(--content-color);\n   background-color:rgba(0, 0,0, 0.8);\n   padding-bottom: 1rem;\n   width: 400px;\n}\n.buttonClickable, .buttonClicked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:black;\n    font-size: 1rem;\n    background: var(--tabs-color);\n    font-family: 'space',sans-serif;\n    width: var(--tabs-width);\n    height: var(--tabs-height);\n    border: solid 3px var(--text-color);\n}\n.buttonClicked {\n    background-color: var(--tabs-color-clicked);\n    box-shadow: 0 0 25px #65aef1;\n\n}\n.buttonClickable:hover {\n    background-color: var(--tabs-color-hover);\n}\n.buttonClickable:active {\n    background: var(--tabs-color-clicked);\n}\n.buttonClickable {\n    cursor: pointer;\n  }\n.ufo {\n    position: absolute;\n    top: 3rem;\n}\n  @media(max-height:700px) {\n    .ufo {\n        width: 80px;\n        height: 80px;\n        position: absolute;\n        top: 3rem;\n    }\n    header {\n        gap: 4rem\n\n    }    \n  }\n  footer {\n    margin-top:5vh;\n    padding-bottom: .5rem;\n    text-align: center;\n    width: 100vw;\n    height: fit-content;\n}\nh1:after {\n    margin-top: 0.5rem;\n    display: block;\n    border-style: solid;\n    content: \" \";\n    width: 100%;\n    height: 0.2rem;\n    border: none;\n    background-color: var(--content-color);\n}\n.paragraphIntroduction div{\n    margin: 0 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    width: 350px;\n    border-right: solid .15rem var(--content-color);\n}\n.paragraphIntroduction div:nth-child(1){\n    animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    ;\n    -webkit-animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    ;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n\n}\n.paragraphIntroduction div:nth-child(2)\n{\n    opacity: 0;\n    animation:\n        typing2 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing2 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation-fill-mode: forwards; \n    animation-fill-mode: forwards;\n    animation-delay: 3s;\n    -webkit-animation-delay: 3s;\n}\n .paragraphIntroduction div:nth-child(3) {\n    opacity: 0;\n    animation:\n        typing3 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing3 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 6.0s;\n    -webkit-animation-delay: 6.0s;\n\n}\n.paragraphIntroduction div:nth-child(4) {\n    opacity: 0;\n    animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 9s;\n    -webkit-animation-delay: 9s;\n}\n.paragraphIntroduction div:nth-child(5) {\n    opacity: 0;\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 12s;\n    -webkit-animation-delay: 12s; \n\n}\n.paragraphIntroduction div:nth-child(6) {\n    opacity: 0;\n    border-right: solid .15rem var(--content-color);\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 15s;\n    -webkit-animation-delay: 15s; \n} \n\n\n\n@keyframes typing1 {\n     0%{\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n    }\n\n    90%{\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        width:350px;\n        border: none;\n    }\n}\n@keyframes typing2 {\n    0% {\n        width:0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing3 {\n    0% {\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing4 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    65% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100%{\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing5 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing6 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border-right: solid .15rem var(--content-color);\n    }    \n}\n@keyframes blink-caret {\n    from, to { border-color: transparent}\n    50% {border-color: var(--content-color);}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAboutPage": () => (/* binding */ displayAboutPage)
/* harmony export */ });
function displayAboutPage() {
    const containerDiv = document.createElement('div');
    const paragraphIntroduction = document.createElement('div');
    const contentDiv = document.getElementById('content');
    const title = document.createElement('h1');

    //lines for animation
    const line1 = document.createElement("div");
    const line2 = document.createElement("div"); 
    const line3 = document.createElement("div");
    const line4 = document.createElement("div");
    const line5 = document.createElement("div");
    const line6  = document.createElement("div");

    line1.textContent = "Welcome to Lunar Plates. Our";
    line2.textContent = "fine cuisine of interstellar "; 
    line3.textContent = "foods is made with love and ";
    line4.textContent = "care. We have been voted ";
    line5.textContent = "number one in interstellar";
    line6.textContent = "dining for the past 10 years. ";    

    paragraphIntroduction.classList.add("paragraphIntroduction");
    paragraphIntroduction.appendChild(line1);
    paragraphIntroduction.appendChild(line2);
    paragraphIntroduction.appendChild(line3);
    paragraphIntroduction.appendChild(line4);
    paragraphIntroduction.appendChild(line5);
    paragraphIntroduction.appendChild(line6);


    contentDiv.innerHTML = " ";
    title.textContent = "About";
    containerDiv.appendChild(title);
    containerDiv.appendChild(paragraphIntroduction);
    contentDiv.appendChild(containerDiv);
}

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContactPage": () => (/* binding */ displayContactPage)
/* harmony export */ });
function displayContactPage() {
    const containerDiv = document.createElement("div");
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    const title2 = document.createElement("h1");
    const title3 = document.createElement("h1");
    const contactInfo = document.createElement("div");
    const locationInfo = document.createElement("div");
    const hourInfo = document.createElement("div");
    const weekInfoArray= ["Sunday: Closed","Monday: 8am to 8pm","Tuesday: 9am to 5pm","Wednesday: 8am to 8pm","Thursday: 8am to 8pm","Friday: 8am to 8pm","Saturday: 8am to 8pm"];

    contentDiv.innerHTML = " ";

    for(let i = 0; i < 7; i++){
        let dayInfo = document.createElement("div");
        dayInfo.textContent = weekInfoArray[i];
        hourInfo.appendChild(dayInfo);
    }

    title.textContent = "Contact";
    title2.textContent = "Location";
    title3.textContent = "Hours";

    contactInfo.textContent= "1450 991 221 1050";
    locationInfo.textContent = "Mathers Lunar Base";
    containerDiv.appendChild(title);
    containerDiv.appendChild(contactInfo);
    containerDiv.appendChild(title2);
    containerDiv.appendChild(locationInfo);
    containerDiv.appendChild(title3);
    containerDiv.appendChild(hourInfo);

    contentDiv.appendChild(containerDiv);

}

/***/ }),

/***/ "./src/foodPage.js":
/*!*************************!*\
  !*** ./src/foodPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenuPage": () => (/* binding */ displayMenuPage)
/* harmony export */ });
function displayMenuPage() {
    const containerDiv = document.createElement('div');
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    const menuItems = document.createElement("div");
    const arrayItems = ["Galatic Crumpets ---- ƺ20.00","Schleep Moops ------  ƺ10.00","Creep Adoops -------- ƺ30.00", "Lunar fragments ---- ƺ2.00","Gleep Gloop ---------- ƺ15.00","Schloop Zan ---------- ƺ25.00"];
    contentDiv.innerHTML = " ";
    for(let i = 0; i < 7; i++){
        let menuItem = document.createElement("div");
        menuItem.textContent = arrayItems[i];
        menuItems.appendChild(menuItem);
    }
    menuItems.style.fontSize = "1rem";
    title.textContent = "Menu";
    containerDiv.appendChild(title);
    containerDiv.appendChild(menuItems);
    contentDiv.appendChild(containerDiv);

}

/***/ }),

/***/ "./src/fonts/batmfa__.ttf":
/*!********************************!*\
  !*** ./src/fonts/batmfa__.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83168830dd1fb811c114.ttf";

/***/ }),

/***/ "./src/images/---pngtree---blue-ufo-alien-sp.png":
/*!*******************************************************!*\
  !*** ./src/images/---pngtree---blue-ufo-alien-sp.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a698ef7199df1e36ae75.png";

/***/ }),

/***/ "./src/images/carlos-vega-7XbxPUdRtgw-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./src/images/carlos-vega-7XbxPUdRtgw-unsplash.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d30659c5e8789d3654a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPage.js */ "./src/aboutPage.js");
/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ "./src/contactPage.js");
/* harmony import */ var _foodPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foodPage.js */ "./src/foodPage.js");
/* harmony import */ var _images_pngtree_blue_ufo_alien_sp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/---pngtree---blue-ufo-alien-sp.png */ "./src/images/---pngtree---blue-ufo-alien-sp.png");







function buttonClicked(e) {
    let boolFirstTimeClicked = true;
    let buttons = document.querySelectorAll("header > div > div");
 

    if(boolFirstTimeClicked){
        let buttonAbout = document.querySelector("header > div > div");
        buttonAbout.addEventListener("click", buttonClicked);
        boolFirstTimeClicked = false;
    }   
    buttons.forEach( button => {
        if(button.classList.item(0) == "buttonClicked"){
            button.classList.remove("buttonClicked");
            document.querySelector("header  > div > div > img").remove();
            button.classList.add("buttonClickable");
        }
    }
    );
    switch(this.textContent){
        case "About":
            (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__.displayAboutPage)();

            break;

        case "Menu":
            (0,_foodPage_js__WEBPACK_IMPORTED_MODULE_3__.displayMenuPage)();
            break;
        case "Contact":
            (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.displayContactPage)();

            break;
        default:
            console.error("Unknown button");
    }
    

    this.classList.remove('buttonClickable');
    this.classList.add('buttonClicked');



    const ufoIcon = new Image();
    ufoIcon.src = _images_pngtree_blue_ufo_alien_sp_png__WEBPACK_IMPORTED_MODULE_4__;
    ufoIcon.classList.add('ufo');
    
    this.appendChild(ufoIcon);
}
function header(){
    (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_1__.displayAboutPage)();
    const contentDiv = document.getElementById('content');
    const header = document.createElement('header');
    const buttonAbout = document.createElement('div');
    const buttonMenu = document.createElement('div');
    const buttonContact = document.createElement('div');
    const buttonWrapper = document.createElement('div');
    const ufoIcon = new Image();

    ufoIcon.src = _images_pngtree_blue_ufo_alien_sp_png__WEBPACK_IMPORTED_MODULE_4__;
    ufoIcon.classList.add('ufo');
    buttonWrapper.classList.add("buttonWrapper");

    
    buttonAbout.textContent = "About";
    buttonMenu.textContent = "Menu";
    buttonContact.textContent = "Contact";

    buttonContact.addEventListener("click",buttonClicked);
    buttonMenu.addEventListener("click",buttonClicked);

    buttonAbout.classList.add('buttonClicked');
    buttonAbout.appendChild(ufoIcon);
    buttonContact.classList.add('buttonClickable');
    buttonMenu.classList.add('buttonClickable');


    header.textContent = "Lunar Plates";
    header.appendChild(buttonWrapper);

    buttonWrapper.appendChild(buttonAbout);
    buttonWrapper.appendChild(buttonMenu);
    buttonWrapper.appendChild(buttonContact);
     
    document.body.appendChild(header);
    return contentDiv;
}
function footer() {
    const footer = document.createElement('footer');
    const anchorlink = document.createElement('a');

    anchorlink.href = "https://pngtree.com";
    anchorlink.textContent = "Pngtree.com";

    footer.textContent = "alien PNG Designed By sdesigns from ";
    footer.appendChild(anchorlink);
    return footer;
}
document.body.appendChild(header());
document.body.appendChild(footer());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFnQjs7QUFFNUI7O0FBRUE7QUFDQSxZQUFZLDZEQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLG1FQUFrQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSxrQkFBa0Isa0VBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrRUFBRztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Zvb2RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9iYXRtZmFfXy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXJsb3MtdmVnYS03WGJ4UFVkUnRndy11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnc3BhY2UnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbjpyb290IHtcXG4gICAgLS10ZXh0LWNvbG9yOiAjNjMxMWZjO1xcbiAgICAtLXRhYnMtY29sb3I6ICM5ZDlhOWU7XFxuICAgIC0tY29udGVudC1jb2xvcjojMDA2NDA4OyBcXG4gICAgLS10YWJzLWNvbG9yLWNsaWNrZWQ6ICM3YTc4N2E7XFxuICAgIC0tdGFicy1jb2xvci1ob3ZlcjojYzFiZGMyO1xcbiAgICAtLXRhYnMtaGVpZ2h0OiAycmVtO1xcbiAgICAtLXRhYnMtd2lkdGg6IDdyZW07XFxufVxcbmJvZHksIGh0bWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIDUlIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdzcGFjZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAtMnB4ICAgLTJweCB3aGl0ZSxcXG4gICAgLTJweCAtMS41cHggd2hpdGUsXFxuICAgIC0ycHggICAtMXB4IHdoaXRlLFxcbiAgICAtMnB4IC0wLjVweCB3aGl0ZSxcXG4gICAgLTJweCAgICAwcHggd2hpdGUsXFxuICAgIC0ycHggIDAuNXB4IHdoaXRlLFxcbiAgICAtMnB4ICAgIDFweCB3aGl0ZSxcXG4gICAgLTJweCAgMS41cHggd2hpdGUsXFxuICAgIC0ycHggICAgMnB4IHdoaXRlLFxcbiAgICAtMS41cHggIDJweCB3aGl0ZSxcXG4gICAgLTFweCAgICAycHggd2hpdGUsXFxuICAgIC0wLjVweCAgMnB4IHdoaXRlLFxcbiAgICAwcHggICAgIDJweCB3aGl0ZSxcXG4gICAgMC41cHggICAycHggd2hpdGUsXFxuICAgIDFweCAgICAgMnB4IHdoaXRlLFxcbiAgICAxLjVweCAgIDJweCB3aGl0ZSxcXG4gICAgMnB4ICAgICAycHggd2hpdGUsXFxuICAgIDJweCAgIDEuNXB4IHdoaXRlLFxcbiAgICAycHggICAgIDFweCB3aGl0ZSxcXG4gICAgMnB4ICAgMC41cHggd2hpdGUsXFxuICAgIDJweCAgICAgMHB4IHdoaXRlLFxcbiAgICAycHggIC0wLjVweCB3aGl0ZSxcXG4gICAgMnB4ICAgIC0xcHggd2hpdGUsXFxuICAgIDJweCAgLTEuNXB4IHdoaXRlLFxcbiAgICAycHggICAgLTJweCB3aGl0ZSxcXG4gICAgMS41cHggIC0ycHggd2hpdGUsXFxuICAgIDFweCAgICAtMnB4IHdoaXRlLFxcbiAgICAwLjVweCAgLTJweCB3aGl0ZSxcXG4gICAgMHB4ICAgIC0ycHggd2hpdGUsXFxuICAgIC0wLjVweCAtMnB4IHdoaXRlLFxcbiAgICAtMXB4ICAgLTJweCB3aGl0ZSxcXG4gICAgLTEuNXB4IC0ycHggd2hpdGU7XFxufVxcbi5idXR0b25XcmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4gYSB7XFxuICAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gfVxcbiAjY29udGVudHtcXG4gICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICBjb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsMCwgMC44KTtcXG4gICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICB3aWR0aDogNDAwcHg7XFxufVxcbi5idXR0b25DbGlja2FibGUsIC5idXR0b25DbGlja2VkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRhYnMtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ3NwYWNlJyxzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogdmFyKC0tdGFicy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdGFicy1oZWlnaHQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuLmJ1dHRvbkNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNvbG9yLWNsaWNrZWQpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAjNjVhZWYxO1xcblxcbn1cXG4uYnV0dG9uQ2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFicy1jb2xvci1ob3Zlcik7XFxufVxcbi5idXR0b25DbGlja2FibGU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGFicy1jb2xvci1jbGlja2VkKTtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4udWZvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNyZW07XFxufVxcbiAgQG1lZGlhKG1heC1oZWlnaHQ6NzAwcHgpIHtcXG4gICAgLnVmbyB7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogM3JlbTtcXG4gICAgfVxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZ2FwOiA0cmVtXFxuXFxuICAgIH0gICAgXFxuICB9XFxuICBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOjV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuaDE6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDAuMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXZ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBhbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTsgXFxuICAgIDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246XFxuICAgICAgICB0eXBpbmcyIDNzIHN0ZXBzKDEwMCxlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzIgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xcbn1cXG4gLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOlxcbiAgICAgICAgdHlwaW5nMyAzcyBzdGVwcygxMDAsZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmczIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlOyBcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogNi4wcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDYuMHM7XFxuXFxufVxcbi5wYXJhZ3JhcGhJbnRyb2R1Y3Rpb24gZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc0IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc0IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA5cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDlzO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nNSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nNSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMTJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTJzOyBcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDYpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNXM7IFxcbn0gXFxuXFxuXFxuXFxuQGtleWZyYW1lcyB0eXBpbmcxIHtcXG4gICAgIDAle1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG5cXG4gICAgOTAle1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB3aWR0aDozNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzIge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDowO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICA4NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzMge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgODUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBib3JkZXI6bm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzQge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgNjUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjpub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA5MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzYge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgOTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfSAgICBcXG59XFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICAgIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudH1cXG4gICAgNTAlIHtib3JkZXItY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO31cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBOEI7QUFDbEM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDZFQUEwRjtJQUMxRiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGdD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O0lBQ1o7SUFDQTtRQUNJLCtDQUErQztRQUMvQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO0lBQ2Y7QUFDSjtBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7UUFDViwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLFVBQVU7UUFDViwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWiwrQ0FBK0M7SUFDbkQ7QUFDSjtBQUNBO0lBQ0ksV0FBVyx5QkFBeUI7SUFDcEMsS0FBSyxrQ0FBa0MsQ0FBQztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzcGFjZSc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvYmF0bWZhX18udHRmKTtcXG59XFxuOnJvb3Qge1xcbiAgICAtLXRleHQtY29sb3I6ICM2MzExZmM7XFxuICAgIC0tdGFicy1jb2xvcjogIzlkOWE5ZTtcXG4gICAgLS1jb250ZW50LWNvbG9yOiMwMDY0MDg7IFxcbiAgICAtLXRhYnMtY29sb3ItY2xpY2tlZDogIzdhNzg3YTtcXG4gICAgLS10YWJzLWNvbG9yLWhvdmVyOiNjMWJkYzI7XFxuICAgIC0tdGFicy1oZWlnaHQ6IDJyZW07XFxuICAgIC0tdGFicy13aWR0aDogN3JlbTtcXG59XFxuYm9keSwgaHRtbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL2Nhcmxvcy12ZWdhLTdYYnhQVWRSdGd3LXVuc3BsYXNoLmpwZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIgNSUgZml4ZWQ7IFxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ3NwYWNlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6XFxuICAgIC0ycHggICAtMnB4IHdoaXRlLFxcbiAgICAtMnB4IC0xLjVweCB3aGl0ZSxcXG4gICAgLTJweCAgIC0xcHggd2hpdGUsXFxuICAgIC0ycHggLTAuNXB4IHdoaXRlLFxcbiAgICAtMnB4ICAgIDBweCB3aGl0ZSxcXG4gICAgLTJweCAgMC41cHggd2hpdGUsXFxuICAgIC0ycHggICAgMXB4IHdoaXRlLFxcbiAgICAtMnB4ICAxLjVweCB3aGl0ZSxcXG4gICAgLTJweCAgICAycHggd2hpdGUsXFxuICAgIC0xLjVweCAgMnB4IHdoaXRlLFxcbiAgICAtMXB4ICAgIDJweCB3aGl0ZSxcXG4gICAgLTAuNXB4ICAycHggd2hpdGUsXFxuICAgIDBweCAgICAgMnB4IHdoaXRlLFxcbiAgICAwLjVweCAgIDJweCB3aGl0ZSxcXG4gICAgMXB4ICAgICAycHggd2hpdGUsXFxuICAgIDEuNXB4ICAgMnB4IHdoaXRlLFxcbiAgICAycHggICAgIDJweCB3aGl0ZSxcXG4gICAgMnB4ICAgMS41cHggd2hpdGUsXFxuICAgIDJweCAgICAgMXB4IHdoaXRlLFxcbiAgICAycHggICAwLjVweCB3aGl0ZSxcXG4gICAgMnB4ICAgICAwcHggd2hpdGUsXFxuICAgIDJweCAgLTAuNXB4IHdoaXRlLFxcbiAgICAycHggICAgLTFweCB3aGl0ZSxcXG4gICAgMnB4ICAtMS41cHggd2hpdGUsXFxuICAgIDJweCAgICAtMnB4IHdoaXRlLFxcbiAgICAxLjVweCAgLTJweCB3aGl0ZSxcXG4gICAgMXB4ICAgIC0ycHggd2hpdGUsXFxuICAgIDAuNXB4ICAtMnB4IHdoaXRlLFxcbiAgICAwcHggICAgLTJweCB3aGl0ZSxcXG4gICAgLTAuNXB4IC0ycHggd2hpdGUsXFxuICAgIC0xcHggICAtMnB4IHdoaXRlLFxcbiAgICAtMS41cHggLTJweCB3aGl0ZTtcXG59XFxuLmJ1dHRvbldyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVyZW07XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3JlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbiBhIHtcXG4gICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiB9XFxuICNjb250ZW50e1xcbiAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgIGNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwwLCAwLjgpO1xcbiAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZSwgLmJ1dHRvbkNsaWNrZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGFicy1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnc3BhY2UnLHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiB2YXIoLS10YWJzLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10YWJzLWhlaWdodCk7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG4uYnV0dG9uQ2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYnMtY29sb3ItY2xpY2tlZCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4ICM2NWFlZjE7XFxuXFxufVxcbi5idXR0b25DbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNvbG9yLWhvdmVyKTtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10YWJzLWNvbG9yLWNsaWNrZWQpO1xcbn1cXG4uYnV0dG9uQ2xpY2thYmxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi51Zm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3JlbTtcXG59XFxuICBAbWVkaWEobWF4LWhlaWdodDo3MDBweCkge1xcbiAgICAudWZvIHtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzcmVtO1xcbiAgICB9XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBnYXA6IDRyZW1cXG5cXG4gICAgfSAgICBcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6NXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5oMTphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdntcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmcxIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlOyBcXG4gICAgO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmcxIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICA7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMilcXG57XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjpcXG4gICAgICAgIHR5cGluZzIgM3Mgc3RlcHMoMTAwLGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMiAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7XFxufVxcbiAucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246XFxuICAgICAgICB0eXBpbmczIDNzIHN0ZXBzKDEwMCxlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzMgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7IFxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2LjBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNi4wcztcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzQgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzQgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDlzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogOXM7XFxufVxcbi5wYXJhZ3JhcGhJbnRyb2R1Y3Rpb24gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMnM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMnM7IFxcblxcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoNikge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzUgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzUgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDE1cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1czsgXFxufSBcXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZzEge1xcbiAgICAgMCV7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcblxcbiAgICA5MCV7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHdpZHRoOjM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nMiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOjA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDg1JSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nMyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICA4NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjpub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA2NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOm5vbmU7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyB0eXBpbmc1IHtcXG4gICAgMCUge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDkwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA5MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9ICAgIFxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcXG4gICAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50fVxcbiAgICA1MCUge2JvcmRlci1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBYm91dFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGFyYWdyYXBoSW50cm9kdWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgLy9saW5lcyBmb3IgYW5pbWF0aW9uXG4gICAgY29uc3QgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgY29uc3QgbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpbmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaW5lNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGluZTYgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxpbmUxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEx1bmFyIFBsYXRlcy4gT3VyXCI7XG4gICAgbGluZTIudGV4dENvbnRlbnQgPSBcImZpbmUgY3Vpc2luZSBvZiBpbnRlcnN0ZWxsYXIgXCI7IFxuICAgIGxpbmUzLnRleHRDb250ZW50ID0gXCJmb29kcyBpcyBtYWRlIHdpdGggbG92ZSBhbmQgXCI7XG4gICAgbGluZTQudGV4dENvbnRlbnQgPSBcImNhcmUuIFdlIGhhdmUgYmVlbiB2b3RlZCBcIjtcbiAgICBsaW5lNS50ZXh0Q29udGVudCA9IFwibnVtYmVyIG9uZSBpbiBpbnRlcnN0ZWxsYXJcIjtcbiAgICBsaW5lNi50ZXh0Q29udGVudCA9IFwiZGluaW5nIGZvciB0aGUgcGFzdCAxMCB5ZWFycy4gXCI7ICAgIFxuXG4gICAgcGFyYWdyYXBoSW50cm9kdWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwYXJhZ3JhcGhJbnRyb2R1Y3Rpb25cIik7XG4gICAgcGFyYWdyYXBoSW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGxpbmUxKTtcbiAgICBwYXJhZ3JhcGhJbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQobGluZTIpO1xuICAgIHBhcmFncmFwaEludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChsaW5lMyk7XG4gICAgcGFyYWdyYXBoSW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGxpbmU0KTtcbiAgICBwYXJhZ3JhcGhJbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQobGluZTUpO1xuICAgIHBhcmFncmFwaEludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChsaW5lNik7XG5cblxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCIgXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoSW50cm9kdWN0aW9uKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHRpdGxlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9jYXRpb25JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2Vla0luZm9BcnJheT0gW1wiU3VuZGF5OiBDbG9zZWRcIixcIk1vbmRheTogOGFtIHRvIDhwbVwiLFwiVHVlc2RheTogOWFtIHRvIDVwbVwiLFwiV2VkbmVzZGF5OiA4YW0gdG8gOHBtXCIsXCJUaHVyc2RheTogOGFtIHRvIDhwbVwiLFwiRnJpZGF5OiA4YW0gdG8gOHBtXCIsXCJTYXR1cmRheTogOGFtIHRvIDhwbVwiXTtcblxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCIgXCI7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKXtcbiAgICAgICAgbGV0IGRheUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkYXlJbmZvLnRleHRDb250ZW50ID0gd2Vla0luZm9BcnJheVtpXTtcbiAgICAgICAgaG91ckluZm8uYXBwZW5kQ2hpbGQoZGF5SW5mbyk7XG4gICAgfVxuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICB0aXRsZTIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gICAgdGl0bGUzLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuXG4gICAgY29udGFjdEluZm8udGV4dENvbnRlbnQ9IFwiMTQ1MCA5OTEgMjIxIDEwNTBcIjtcbiAgICBsb2NhdGlvbkluZm8udGV4dENvbnRlbnQgPSBcIk1hdGhlcnMgTHVuYXIgQmFzZVwiO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGUyKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGUzKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYXJyYXlJdGVtcyA9IFtcIkdhbGF0aWMgQ3J1bXBldHMgLS0tLSDGujIwLjAwXCIsXCJTY2hsZWVwIE1vb3BzIC0tLS0tLSAgxroxMC4wMFwiLFwiQ3JlZXAgQWRvb3BzIC0tLS0tLS0tIMa6MzAuMDBcIiwgXCJMdW5hciBmcmFnbWVudHMgLS0tLSDGujIuMDBcIixcIkdsZWVwIEdsb29wIC0tLS0tLS0tLS0gxroxNS4wMFwiLFwiU2NobG9vcCBaYW4gLS0tLS0tLS0tLSDGujI1LjAwXCJdO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCIgXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gYXJyYXlJdGVtc1tpXTtcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgbWVudUl0ZW1zLnN0eWxlLmZvbnRTaXplID0gXCIxcmVtXCI7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtkaXNwbGF5QWJvdXRQYWdlfSBmcm9tICcuL2Fib3V0UGFnZS5qcyc7XG5pbXBvcnQge2Rpc3BsYXlDb250YWN0UGFnZX0gZnJvbSAnLi9jb250YWN0UGFnZS5qcyc7XG5pbXBvcnQge2Rpc3BsYXlNZW51UGFnZX0gZnJvbSAnLi9mb29kUGFnZS5qcyc7XG5pbXBvcnQgdWZvIGZyb20gJy4vaW1hZ2VzLy0tLXBuZ3RyZWUtLS1ibHVlLXVmby1hbGllbi1zcC5wbmcnO1xuXG5cbmZ1bmN0aW9uIGJ1dHRvbkNsaWNrZWQoZSkge1xuICAgIGxldCBib29sRmlyc3RUaW1lQ2xpY2tlZCA9IHRydWU7XG4gICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaGVhZGVyID4gZGl2ID4gZGl2XCIpO1xuIFxuXG4gICAgaWYoYm9vbEZpcnN0VGltZUNsaWNrZWQpe1xuICAgICAgICBsZXQgYnV0dG9uQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyID4gZGl2ID4gZGl2XCIpO1xuICAgICAgICBidXR0b25BYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIGJvb2xGaXJzdFRpbWVDbGlja2VkID0gZmFsc2U7XG4gICAgfSAgIFxuICAgIGJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+IHtcbiAgICAgICAgaWYoYnV0dG9uLmNsYXNzTGlzdC5pdGVtKDApID09IFwiYnV0dG9uQ2xpY2tlZFwiKXtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uQ2xpY2tlZFwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgID4gZGl2ID4gZGl2ID4gaW1nXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25DbGlja2FibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgKTtcbiAgICBzd2l0Y2godGhpcy50ZXh0Q29udGVudCl7XG4gICAgICAgIGNhc2UgXCJBYm91dFwiOlxuICAgICAgICAgICAgZGlzcGxheUFib3V0UGFnZSgpO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgICAgZGlzcGxheU1lbnVQYWdlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICAgIGRpc3BsYXlDb250YWN0UGFnZSgpO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmtub3duIGJ1dHRvblwiKTtcbiAgICB9XG4gICAgXG5cbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbkNsaWNrYWJsZScpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2tlZCcpO1xuXG5cblxuICAgIGNvbnN0IHVmb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB1Zm9JY29uLnNyYyA9IHVmbztcbiAgICB1Zm9JY29uLmNsYXNzTGlzdC5hZGQoJ3VmbycpO1xuICAgIFxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodWZvSWNvbik7XG59XG5mdW5jdGlvbiBoZWFkZXIoKXtcbiAgICBkaXNwbGF5QWJvdXRQYWdlKCk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgYnV0dG9uQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1Zm9JY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICB1Zm9JY29uLnNyYyA9IHVmbztcbiAgICB1Zm9JY29uLmNsYXNzTGlzdC5hZGQoJ3VmbycpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbldyYXBwZXJcIik7XG5cbiAgICBcbiAgICBidXR0b25BYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBidXR0b25NZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgYnV0dG9uQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gICAgYnV0dG9uQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixidXR0b25DbGlja2VkKTtcbiAgICBidXR0b25NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGJ1dHRvbkNsaWNrZWQpO1xuXG4gICAgYnV0dG9uQWJvdXQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2tlZCcpO1xuICAgIGJ1dHRvbkFib3V0LmFwcGVuZENoaWxkKHVmb0ljb24pO1xuICAgIGJ1dHRvbkNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2thYmxlJyk7XG4gICAgYnV0dG9uTWVudS5jbGFzc0xpc3QuYWRkKCdidXR0b25DbGlja2FibGUnKTtcblxuXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJMdW5hciBQbGF0ZXNcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG5cbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbkFib3V0KTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbk1lbnUpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFjdCk7XG4gICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICByZXR1cm4gY29udGVudERpdjtcbn1cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBhbmNob3JsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgYW5jaG9ybGluay5ocmVmID0gXCJodHRwczovL3BuZ3RyZWUuY29tXCI7XG4gICAgYW5jaG9ybGluay50ZXh0Q29udGVudCA9IFwiUG5ndHJlZS5jb21cIjtcblxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiYWxpZW4gUE5HIERlc2lnbmVkIEJ5IHNkZXNpZ25zIGZyb20gXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFuY2hvcmxpbmspO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==