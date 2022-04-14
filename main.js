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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'space';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n:root {\n    --text-color: #6311fc;\n    --tabs-color: #9d9a9e;\n    --content-color:#006408; \n    --tabs-color-clicked: #7a787a;\n    --tabs-color-hover:#c1bdc2;\n    --tabs-height: 2rem;\n    --tabs-width: 7rem;\n}\nbody, html {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center 5% fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: var(--text-color);\n    font-family: 'space', sans-serif;\n    margin: 0;\n    padding: .5rem;\n    text-shadow:\n    -2px   -2px white,\n    -2px -1.5px white,\n    -2px   -1px white,\n    -2px -0.5px white,\n    -2px    0px white,\n    -2px  0.5px white,\n    -2px    1px white,\n    -2px  1.5px white,\n    -2px    2px white,\n    -1.5px  2px white,\n    -1px    2px white,\n    -0.5px  2px white,\n    0px     2px white,\n    0.5px   2px white,\n    1px     2px white,\n    1.5px   2px white,\n    2px     2px white,\n    2px   1.5px white,\n    2px     1px white,\n    2px   0.5px white,\n    2px     0px white,\n    2px  -0.5px white,\n    2px    -1px white,\n    2px  -1.5px white,\n    2px    -2px white,\n    1.5px  -2px white,\n    1px    -2px white,\n    0.5px  -2px white,\n    0px    -2px white,\n    -0.5px -2px white,\n    -1px   -2px white,\n    -1.5px -2px white;\n}\n.buttonWrapper {\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\nheader {\n    display: flex;\n    gap: 7rem;\n    flex-direction: column;\n    text-align: center;\n    font-size: 2rem;\n}\n a {\n     color:var(--text-color);\n     text-decoration: none;\n }\n #content{\n     overflow: scroll;\n    text-shadow: none;\n   display: flex;\n   justify-content: center;\n   align-items: center; \n   margin-top: 1rem;\n   color: var(--content-color);\n   background-color:rgba(0, 0,0, 0.8);\n   padding: 1rem;\n   width: 400px;\n}\n.buttonClickable, .buttonClicked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:black;\n    font-size: 1rem;\n    background: var(--tabs-color);\n    font-family: 'space',sans-serif;\n    width: var(--tabs-width);\n    height: var(--tabs-height);\n    border: solid 3px var(--text-color);\n}\n.buttonClicked {\n    background-color: var(--tabs-color-clicked);\n    box-shadow: 0 0 25px #65aef1;\n\n}\n.buttonClickable:hover {\n    background-color: var(--tabs-color-hover);\n}\n.buttonClickable:active {\n    background: var(--tabs-color-clicked);\n}\n.buttonClickable {\n    cursor: pointer;\n  }\n.ufo {\n    position: absolute;\n    top: 3rem;\n}\n  @media(max-height:700px) {\n    .ufo {\n        width: 80px;\n        height: 80px;\n        position: absolute;\n        top: 3rem;\n    }\n    header {\n        gap: 4rem\n\n    }    \n  }\n  footer {\n    margin-top:5vh;\n    padding-bottom: .5rem;\n    text-align: center;\n    width: 100vw;\n    height: fit-content;\n}\nh1:after {\n    margin-top: 0.5rem;\n    display: block;\n    border-style: solid;\n    content: \" \";\n    width: 100%;\n    height: 0.2rem;\n    border: none;\n    background-color: var(--content-color);\n}\n.paragraphIntroduction div{\n    margin: 0 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    width: 350px;\n    border-right: solid .15rem var(--content-color);\n}\n.paragraphIntroduction div:nth-child(1){\n    animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    ;\n    -webkit-animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    ;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n\n}\n.paragraphIntroduction div:nth-child(2)\n{\n    opacity: 0;\n    animation:\n        typing2 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing2 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation-fill-mode: forwards; \n    animation-fill-mode: forwards;\n    animation-delay: 3s;\n    -webkit-animation-delay: 3s;\n}\n .paragraphIntroduction div:nth-child(3) {\n    opacity: 0;\n    animation:\n        typing3 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing3 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 6.0s;\n    -webkit-animation-delay: 6.0s;\n\n}\n.paragraphIntroduction div:nth-child(4) {\n    opacity: 0;\n    animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 9s;\n    -webkit-animation-delay: 9s;\n}\n.paragraphIntroduction div:nth-child(5) {\n    opacity: 0;\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 12s;\n    -webkit-animation-delay: 12s; \n\n}\n.paragraphIntroduction div:nth-child(6) {\n    opacity: 0;\n    border-right: solid .15rem var(--content-color);\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 15s;\n    -webkit-animation-delay: 15s; \n} \n\n\n\n@keyframes typing1 {\n     0%{\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n    }\n\n    90%{\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        width:350px;\n        border: none;\n    }\n}\n@keyframes typing2 {\n    0% {\n        width:0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing3 {\n    0% {\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing4 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    65% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100%{\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing5 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing6 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border-right: solid .15rem var(--content-color);\n    }    \n}\n@keyframes blink-caret {\n    from, to { border-color: transparent}\n    50% {border-color: var(--content-color);}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'space';\n    src: url(./fonts/batmfa__.ttf);\n}\n:root {\n    --text-color: #6311fc;\n    --tabs-color: #9d9a9e;\n    --content-color:#006408; \n    --tabs-color-clicked: #7a787a;\n    --tabs-color-hover:#c1bdc2;\n    --tabs-height: 2rem;\n    --tabs-width: 7rem;\n}\nbody, html {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: url(\"./images/carlos-vega-7XbxPUdRtgw-unsplash.jpg\") no-repeat center 5% fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    color: var(--text-color);\n    font-family: 'space', sans-serif;\n    margin: 0;\n    padding: .5rem;\n    text-shadow:\n    -2px   -2px white,\n    -2px -1.5px white,\n    -2px   -1px white,\n    -2px -0.5px white,\n    -2px    0px white,\n    -2px  0.5px white,\n    -2px    1px white,\n    -2px  1.5px white,\n    -2px    2px white,\n    -1.5px  2px white,\n    -1px    2px white,\n    -0.5px  2px white,\n    0px     2px white,\n    0.5px   2px white,\n    1px     2px white,\n    1.5px   2px white,\n    2px     2px white,\n    2px   1.5px white,\n    2px     1px white,\n    2px   0.5px white,\n    2px     0px white,\n    2px  -0.5px white,\n    2px    -1px white,\n    2px  -1.5px white,\n    2px    -2px white,\n    1.5px  -2px white,\n    1px    -2px white,\n    0.5px  -2px white,\n    0px    -2px white,\n    -0.5px -2px white,\n    -1px   -2px white,\n    -1.5px -2px white;\n}\n.buttonWrapper {\n    display: flex;\n    justify-content: center;\n    gap: .25rem;\n}\nheader {\n    display: flex;\n    gap: 7rem;\n    flex-direction: column;\n    text-align: center;\n    font-size: 2rem;\n}\n a {\n     color:var(--text-color);\n     text-decoration: none;\n }\n #content{\n     overflow: scroll;\n    text-shadow: none;\n   display: flex;\n   justify-content: center;\n   align-items: center; \n   margin-top: 1rem;\n   color: var(--content-color);\n   background-color:rgba(0, 0,0, 0.8);\n   padding: 1rem;\n   width: 400px;\n}\n.buttonClickable, .buttonClicked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:black;\n    font-size: 1rem;\n    background: var(--tabs-color);\n    font-family: 'space',sans-serif;\n    width: var(--tabs-width);\n    height: var(--tabs-height);\n    border: solid 3px var(--text-color);\n}\n.buttonClicked {\n    background-color: var(--tabs-color-clicked);\n    box-shadow: 0 0 25px #65aef1;\n\n}\n.buttonClickable:hover {\n    background-color: var(--tabs-color-hover);\n}\n.buttonClickable:active {\n    background: var(--tabs-color-clicked);\n}\n.buttonClickable {\n    cursor: pointer;\n  }\n.ufo {\n    position: absolute;\n    top: 3rem;\n}\n  @media(max-height:700px) {\n    .ufo {\n        width: 80px;\n        height: 80px;\n        position: absolute;\n        top: 3rem;\n    }\n    header {\n        gap: 4rem\n\n    }    \n  }\n  footer {\n    margin-top:5vh;\n    padding-bottom: .5rem;\n    text-align: center;\n    width: 100vw;\n    height: fit-content;\n}\nh1:after {\n    margin-top: 0.5rem;\n    display: block;\n    border-style: solid;\n    content: \" \";\n    width: 100%;\n    height: 0.2rem;\n    border: none;\n    background-color: var(--content-color);\n}\n.paragraphIntroduction div{\n    margin: 0 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    margin: 0 auto;\n    width: 350px;\n    border-right: solid .15rem var(--content-color);\n}\n.paragraphIntroduction div:nth-child(1){\n    animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    ;\n    -webkit-animation: \n        typing1 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    ;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n\n}\n.paragraphIntroduction div:nth-child(2)\n{\n    opacity: 0;\n    animation:\n        typing2 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing2 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation-fill-mode: forwards; \n    animation-fill-mode: forwards;\n    animation-delay: 3s;\n    -webkit-animation-delay: 3s;\n}\n .paragraphIntroduction div:nth-child(3) {\n    opacity: 0;\n    animation:\n        typing3 3s steps(100,end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing3 3s steps(100, end),\n        blink-caret 1s step-end infinite; \n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 6.0s;\n    -webkit-animation-delay: 6.0s;\n\n}\n.paragraphIntroduction div:nth-child(4) {\n    opacity: 0;\n    animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing4 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 9s;\n    -webkit-animation-delay: 9s;\n}\n.paragraphIntroduction div:nth-child(5) {\n    opacity: 0;\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 12s;\n    -webkit-animation-delay: 12s; \n\n}\n.paragraphIntroduction div:nth-child(6) {\n    opacity: 0;\n    border-right: solid .15rem var(--content-color);\n    animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    -webkit-animation: \n        typing5 3s steps(100, end),\n        blink-caret 1s step-end infinite;\n    animation-fill-mode: forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-delay: 15s;\n    -webkit-animation-delay: 15s; \n} \n\n\n\n@keyframes typing1 {\n     0%{\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n    }\n\n    90%{\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        width:350px;\n        border: none;\n    }\n}\n@keyframes typing2 {\n    0% {\n        width:0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing3 {\n    0% {\n        width: 0;\n    }\n    1% {\n        border-right: solid .15rem var(--content-color);\n        opacity: 1;\n    }\n\n    85% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing4 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    65% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100%{\n        opacity: 1;\n        width: 350px;\n        border:none;\n    }\n}\n@keyframes typing5 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border: none;\n    }\n}\n@keyframes typing6 {\n    0% {\n        width: 0;\n    }\n    1% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    90% {\n        opacity: 1;\n        border-right: solid .15rem var(--content-color);\n    }\n    100% {\n        opacity: 1;\n        width: 350px;\n        border-right: solid .15rem var(--content-color);\n    }    \n}\n@keyframes blink-caret {\n    from, to { border-color: transparent}\n    50% {border-color: var(--content-color);}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFnQjs7QUFFNUI7O0FBRUE7QUFDQSxZQUFZLDZEQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLG1FQUFrQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSxrQkFBa0Isa0VBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrRUFBRztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Zvb2RQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9iYXRtZmFfXy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXJsb3MtdmVnYS03WGJ4UFVkUnRndy11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnc3BhY2UnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbjpyb290IHtcXG4gICAgLS10ZXh0LWNvbG9yOiAjNjMxMWZjO1xcbiAgICAtLXRhYnMtY29sb3I6ICM5ZDlhOWU7XFxuICAgIC0tY29udGVudC1jb2xvcjojMDA2NDA4OyBcXG4gICAgLS10YWJzLWNvbG9yLWNsaWNrZWQ6ICM3YTc4N2E7XFxuICAgIC0tdGFicy1jb2xvci1ob3ZlcjojYzFiZGMyO1xcbiAgICAtLXRhYnMtaGVpZ2h0OiAycmVtO1xcbiAgICAtLXRhYnMtd2lkdGg6IDdyZW07XFxufVxcbmJvZHksIGh0bWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIDUlIGZpeGVkOyBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdzcGFjZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAtMnB4ICAgLTJweCB3aGl0ZSxcXG4gICAgLTJweCAtMS41cHggd2hpdGUsXFxuICAgIC0ycHggICAtMXB4IHdoaXRlLFxcbiAgICAtMnB4IC0wLjVweCB3aGl0ZSxcXG4gICAgLTJweCAgICAwcHggd2hpdGUsXFxuICAgIC0ycHggIDAuNXB4IHdoaXRlLFxcbiAgICAtMnB4ICAgIDFweCB3aGl0ZSxcXG4gICAgLTJweCAgMS41cHggd2hpdGUsXFxuICAgIC0ycHggICAgMnB4IHdoaXRlLFxcbiAgICAtMS41cHggIDJweCB3aGl0ZSxcXG4gICAgLTFweCAgICAycHggd2hpdGUsXFxuICAgIC0wLjVweCAgMnB4IHdoaXRlLFxcbiAgICAwcHggICAgIDJweCB3aGl0ZSxcXG4gICAgMC41cHggICAycHggd2hpdGUsXFxuICAgIDFweCAgICAgMnB4IHdoaXRlLFxcbiAgICAxLjVweCAgIDJweCB3aGl0ZSxcXG4gICAgMnB4ICAgICAycHggd2hpdGUsXFxuICAgIDJweCAgIDEuNXB4IHdoaXRlLFxcbiAgICAycHggICAgIDFweCB3aGl0ZSxcXG4gICAgMnB4ICAgMC41cHggd2hpdGUsXFxuICAgIDJweCAgICAgMHB4IHdoaXRlLFxcbiAgICAycHggIC0wLjVweCB3aGl0ZSxcXG4gICAgMnB4ICAgIC0xcHggd2hpdGUsXFxuICAgIDJweCAgLTEuNXB4IHdoaXRlLFxcbiAgICAycHggICAgLTJweCB3aGl0ZSxcXG4gICAgMS41cHggIC0ycHggd2hpdGUsXFxuICAgIDFweCAgICAtMnB4IHdoaXRlLFxcbiAgICAwLjVweCAgLTJweCB3aGl0ZSxcXG4gICAgMHB4ICAgIC0ycHggd2hpdGUsXFxuICAgIC0wLjVweCAtMnB4IHdoaXRlLFxcbiAgICAtMXB4ICAgLTJweCB3aGl0ZSxcXG4gICAgLTEuNXB4IC0ycHggd2hpdGU7XFxufVxcbi5idXR0b25XcmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4gYSB7XFxuICAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gfVxcbiAjY29udGVudHtcXG4gICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICBjb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsMCwgMC44KTtcXG4gICBwYWRkaW5nOiAxcmVtO1xcbiAgIHdpZHRoOiA0MDBweDtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZSwgLmJ1dHRvbkNsaWNrZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGFicy1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnc3BhY2UnLHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiB2YXIoLS10YWJzLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10YWJzLWhlaWdodCk7XFxuICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG4uYnV0dG9uQ2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYnMtY29sb3ItY2xpY2tlZCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAyNXB4ICM2NWFlZjE7XFxuXFxufVxcbi5idXR0b25DbGlja2FibGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNvbG9yLWhvdmVyKTtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10YWJzLWNvbG9yLWNsaWNrZWQpO1xcbn1cXG4uYnV0dG9uQ2xpY2thYmxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbi51Zm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3JlbTtcXG59XFxuICBAbWVkaWEobWF4LWhlaWdodDo3MDBweCkge1xcbiAgICAudWZvIHtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzcmVtO1xcbiAgICB9XFxuICAgIGhlYWRlciB7XFxuICAgICAgICBnYXA6IDRyZW1cXG5cXG4gICAgfSAgICBcXG4gIH1cXG4gIGZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6NXZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5oMTphZnRlciB7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdntcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmcxIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlOyBcXG4gICAgO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmcxIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICA7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMilcXG57XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjpcXG4gICAgICAgIHR5cGluZzIgM3Mgc3RlcHMoMTAwLGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMiAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7XFxufVxcbiAucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246XFxuICAgICAgICB0eXBpbmczIDNzIHN0ZXBzKDEwMCxlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzMgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7IFxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA2LjBzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNi4wcztcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzQgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzQgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDlzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogOXM7XFxufVxcbi5wYXJhZ3JhcGhJbnRyb2R1Y3Rpb24gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxMnM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMnM7IFxcblxcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoNikge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzUgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzUgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDE1cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1czsgXFxufSBcXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZzEge1xcbiAgICAgMCV7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcblxcbiAgICA5MCV7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHdpZHRoOjM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nMiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOjA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDg1JSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nMyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICA4NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjpub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA2NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOm5vbmU7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyB0eXBpbmc1IHtcXG4gICAgMCUge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDkwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA5MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9ICAgIFxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcXG4gICAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50fVxcbiAgICA1MCUge2JvcmRlci1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7fVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUE4QjtBQUNsQztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNkVBQTBGO0lBQzFGLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lB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O1FBQ0ksK0NBQStDO1FBQy9DLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDViwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLCtDQUErQztJQUNuRDtBQUNKO0FBQ0E7SUFDSSxXQUFXLHlCQUF5QjtJQUNwQyxLQUFLLGtDQUFrQyxDQUFDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3NwYWNlJztcXG4gICAgc3JjOiB1cmwoLi9mb250cy9iYXRtZmFfXy50dGYpO1xcbn1cXG46cm9vdCB7XFxuICAgIC0tdGV4dC1jb2xvcjogIzYzMTFmYztcXG4gICAgLS10YWJzLWNvbG9yOiAjOWQ5YTllO1xcbiAgICAtLWNvbnRlbnQtY29sb3I6IzAwNjQwODsgXFxuICAgIC0tdGFicy1jb2xvci1jbGlja2VkOiAjN2E3ODdhO1xcbiAgICAtLXRhYnMtY29sb3ItaG92ZXI6I2MxYmRjMjtcXG4gICAgLS10YWJzLWhlaWdodDogMnJlbTtcXG4gICAgLS10YWJzLXdpZHRoOiA3cmVtO1xcbn1cXG5ib2R5LCBodG1sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvY2FybG9zLXZlZ2EtN1hieFBVZFJ0Z3ctdW5zcGxhc2guanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciA1JSBmaXhlZDsgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnc3BhY2UnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzpcXG4gICAgLTJweCAgIC0ycHggd2hpdGUsXFxuICAgIC0ycHggLTEuNXB4IHdoaXRlLFxcbiAgICAtMnB4ICAgLTFweCB3aGl0ZSxcXG4gICAgLTJweCAtMC41cHggd2hpdGUsXFxuICAgIC0ycHggICAgMHB4IHdoaXRlLFxcbiAgICAtMnB4ICAwLjVweCB3aGl0ZSxcXG4gICAgLTJweCAgICAxcHggd2hpdGUsXFxuICAgIC0ycHggIDEuNXB4IHdoaXRlLFxcbiAgICAtMnB4ICAgIDJweCB3aGl0ZSxcXG4gICAgLTEuNXB4ICAycHggd2hpdGUsXFxuICAgIC0xcHggICAgMnB4IHdoaXRlLFxcbiAgICAtMC41cHggIDJweCB3aGl0ZSxcXG4gICAgMHB4ICAgICAycHggd2hpdGUsXFxuICAgIDAuNXB4ICAgMnB4IHdoaXRlLFxcbiAgICAxcHggICAgIDJweCB3aGl0ZSxcXG4gICAgMS41cHggICAycHggd2hpdGUsXFxuICAgIDJweCAgICAgMnB4IHdoaXRlLFxcbiAgICAycHggICAxLjVweCB3aGl0ZSxcXG4gICAgMnB4ICAgICAxcHggd2hpdGUsXFxuICAgIDJweCAgIDAuNXB4IHdoaXRlLFxcbiAgICAycHggICAgIDBweCB3aGl0ZSxcXG4gICAgMnB4ICAtMC41cHggd2hpdGUsXFxuICAgIDJweCAgICAtMXB4IHdoaXRlLFxcbiAgICAycHggIC0xLjVweCB3aGl0ZSxcXG4gICAgMnB4ICAgIC0ycHggd2hpdGUsXFxuICAgIDEuNXB4ICAtMnB4IHdoaXRlLFxcbiAgICAxcHggICAgLTJweCB3aGl0ZSxcXG4gICAgMC41cHggIC0ycHggd2hpdGUsXFxuICAgIDBweCAgICAtMnB4IHdoaXRlLFxcbiAgICAtMC41cHggLTJweCB3aGl0ZSxcXG4gICAgLTFweCAgIC0ycHggd2hpdGUsXFxuICAgIC0xLjVweCAtMnB4IHdoaXRlO1xcbn1cXG4uYnV0dG9uV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IC4yNXJlbTtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuIGEge1xcbiAgICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XFxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuIH1cXG4gI2NvbnRlbnR7XFxuICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLDAsIDAuOCk7XFxuICAgcGFkZGluZzogMXJlbTtcXG4gICB3aWR0aDogNDAwcHg7XFxufVxcbi5idXR0b25DbGlja2FibGUsIC5idXR0b25DbGlja2VkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRhYnMtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ3NwYWNlJyxzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogdmFyKC0tdGFicy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdGFicy1oZWlnaHQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuLmJ1dHRvbkNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJzLWNvbG9yLWNsaWNrZWQpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjVweCAjNjVhZWYxO1xcblxcbn1cXG4uYnV0dG9uQ2xpY2thYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFicy1jb2xvci1ob3Zlcik7XFxufVxcbi5idXR0b25DbGlja2FibGU6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGFicy1jb2xvci1jbGlja2VkKTtcXG59XFxuLmJ1dHRvbkNsaWNrYWJsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4udWZvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNyZW07XFxufVxcbiAgQG1lZGlhKG1heC1oZWlnaHQ6NzAwcHgpIHtcXG4gICAgLnVmbyB7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogM3JlbTtcXG4gICAgfVxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZ2FwOiA0cmVtXFxuXFxuICAgIH0gICAgXFxuICB9XFxuICBmb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOjV2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuaDE6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDAuMnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXZ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBhbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTsgXFxuICAgIDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nMSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246XFxuICAgICAgICB0eXBpbmcyIDNzIHN0ZXBzKDEwMCxlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBcXG4gICAgICAgIHR5cGluZzIgM3Mgc3RlcHMoMTAwLCBlbmQpLFxcbiAgICAgICAgYmxpbmstY2FyZXQgMXMgc3RlcC1lbmQgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xcbn1cXG4gLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOlxcbiAgICAgICAgdHlwaW5nMyAzcyBzdGVwcygxMDAsZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmczIDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlOyBcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogNi4wcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDYuMHM7XFxuXFxufVxcbi5wYXJhZ3JhcGhJbnRyb2R1Y3Rpb24gZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc0IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc0IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA5cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDlzO1xcbn1cXG4ucGFyYWdyYXBoSW50cm9kdWN0aW9uIGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nNSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFxcbiAgICAgICAgdHlwaW5nNSAzcyBzdGVwcygxMDAsIGVuZCksXFxuICAgICAgICBibGluay1jYXJldCAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMTJzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTJzOyBcXG5cXG59XFxuLnBhcmFncmFwaEludHJvZHVjdGlvbiBkaXY6bnRoLWNoaWxkKDYpIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIGFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogXFxuICAgICAgICB0eXBpbmc1IDNzIHN0ZXBzKDEwMCwgZW5kKSxcXG4gICAgICAgIGJsaW5rLWNhcmV0IDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNXM7IFxcbn0gXFxuXFxuXFxuXFxuQGtleWZyYW1lcyB0eXBpbmcxIHtcXG4gICAgIDAle1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgMSUge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG5cXG4gICAgOTAle1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB3aWR0aDozNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzIge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDowO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICA4NSUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzMge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgODUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBib3JkZXI6bm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzQge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgNjUlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjpub25lO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgdHlwaW5nNSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuICAgIDElIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICA5MCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgLjE1cmVtIHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHR5cGluZzYge1xcbiAgICAwJSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICAxJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAuMTVyZW0gdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIH1cXG4gICAgOTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xNXJlbSB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgfSAgICBcXG59XFxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XFxuICAgIGZyb20sIHRvIHsgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudH1cXG4gICAgNTAlIHtib3JkZXItY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO31cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWJvdXRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBhcmFncmFwaEludHJvZHVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIC8vbGluZXMgZm9yIGFuaW1hdGlvblxuICAgIGNvbnN0IGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIGNvbnN0IGxpbmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaW5lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGluZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpbmU2ICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsaW5lMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBMdW5hciBQbGF0ZXMuIE91clwiO1xuICAgIGxpbmUyLnRleHRDb250ZW50ID0gXCJmaW5lIGN1aXNpbmUgb2YgaW50ZXJzdGVsbGFyIFwiOyBcbiAgICBsaW5lMy50ZXh0Q29udGVudCA9IFwiZm9vZHMgaXMgbWFkZSB3aXRoIGxvdmUgYW5kIFwiO1xuICAgIGxpbmU0LnRleHRDb250ZW50ID0gXCJjYXJlLiBXZSBoYXZlIGJlZW4gdm90ZWQgXCI7XG4gICAgbGluZTUudGV4dENvbnRlbnQgPSBcIm51bWJlciBvbmUgaW4gaW50ZXJzdGVsbGFyXCI7XG4gICAgbGluZTYudGV4dENvbnRlbnQgPSBcImRpbmluZyBmb3IgdGhlIHBhc3QgMTAgeWVhcnMuIFwiOyAgICBcblxuICAgIHBhcmFncmFwaEludHJvZHVjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGFyYWdyYXBoSW50cm9kdWN0aW9uXCIpO1xuICAgIHBhcmFncmFwaEludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChsaW5lMSk7XG4gICAgcGFyYWdyYXBoSW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGxpbmUyKTtcbiAgICBwYXJhZ3JhcGhJbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQobGluZTMpO1xuICAgIHBhcmFncmFwaEludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChsaW5lNCk7XG4gICAgcGFyYWdyYXBoSW50cm9kdWN0aW9uLmFwcGVuZENoaWxkKGxpbmU1KTtcbiAgICBwYXJhZ3JhcGhJbnRyb2R1Y3Rpb24uYXBwZW5kQ2hpbGQobGluZTYpO1xuXG5cbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiIFwiO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaEludHJvZHVjdGlvbik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCB0aXRsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdlZWtJbmZvQXJyYXk9IFtcIlN1bmRheTogQ2xvc2VkXCIsXCJNb25kYXk6IDhhbSB0byA4cG1cIixcIlR1ZXNkYXk6IDlhbSB0byA1cG1cIixcIldlZG5lc2RheTogOGFtIHRvIDhwbVwiLFwiVGh1cnNkYXk6IDhhbSB0byA4cG1cIixcIkZyaWRheTogOGFtIHRvIDhwbVwiLFwiU2F0dXJkYXk6IDhhbSB0byA4cG1cIl07XG5cbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiIFwiO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKyl7XG4gICAgICAgIGxldCBkYXlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGF5SW5mby50ZXh0Q29udGVudCA9IHdlZWtJbmZvQXJyYXlbaV07XG4gICAgICAgIGhvdXJJbmZvLmFwcGVuZENoaWxkKGRheUluZm8pO1xuICAgIH1cblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgdGl0bGUyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICAgIHRpdGxlMy50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcblxuICAgIGNvbnRhY3RJbmZvLnRleHRDb250ZW50PSBcIjE0NTAgOTkxIDIyMSAxMDUwXCI7XG4gICAgbG9jYXRpb25JbmZvLnRleHRDb250ZW50ID0gXCJNYXRoZXJzIEx1bmFyIEJhc2VcIjtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlMik7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbyk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlMyk7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhvdXJJbmZvKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcblxufSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFycmF5SXRlbXMgPSBbXCJHYWxhdGljIENydW1wZXRzIC0tLS0gxroyMC4wMFwiLFwiU2NobGVlcCBNb29wcyAtLS0tLS0gIMa6MTAuMDBcIixcIkNyZWVwIEFkb29wcyAtLS0tLS0tLSDGujMwLjAwXCIsIFwiTHVuYXIgZnJhZ21lbnRzIC0tLS0gxroyLjAwXCIsXCJHbGVlcCBHbG9vcCAtLS0tLS0tLS0tIMa6MTUuMDBcIixcIlNjaGxvb3AgWmFuIC0tLS0tLS0tLS0gxroyNS4wMFwiXTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiIFwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspe1xuICAgICAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGFycmF5SXRlbXNbaV07XG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gICAgfVxuICAgIG1lbnVJdGVtcy5zdHlsZS5mb250U2l6ZSA9IFwiMXJlbVwiO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7ZGlzcGxheUFib3V0UGFnZX0gZnJvbSAnLi9hYm91dFBhZ2UuanMnO1xuaW1wb3J0IHtkaXNwbGF5Q29udGFjdFBhZ2V9IGZyb20gJy4vY29udGFjdFBhZ2UuanMnO1xuaW1wb3J0IHtkaXNwbGF5TWVudVBhZ2V9IGZyb20gJy4vZm9vZFBhZ2UuanMnO1xuaW1wb3J0IHVmbyBmcm9tICcuL2ltYWdlcy8tLS1wbmd0cmVlLS0tYmx1ZS11Zm8tYWxpZW4tc3AucG5nJztcblxuXG5mdW5jdGlvbiBidXR0b25DbGlja2VkKGUpIHtcbiAgICBsZXQgYm9vbEZpcnN0VGltZUNsaWNrZWQgPSB0cnVlO1xuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImhlYWRlciA+IGRpdiA+IGRpdlwiKTtcbiBcblxuICAgIGlmKGJvb2xGaXJzdFRpbWVDbGlja2VkKXtcbiAgICAgICAgbGV0IGJ1dHRvbkFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciA+IGRpdiA+IGRpdlwiKTtcbiAgICAgICAgYnV0dG9uQWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1dHRvbkNsaWNrZWQpO1xuICAgICAgICBib29sRmlyc3RUaW1lQ2xpY2tlZCA9IGZhbHNlO1xuICAgIH0gICBcbiAgICBidXR0b25zLmZvckVhY2goIGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmKGJ1dHRvbi5jbGFzc0xpc3QuaXRlbSgwKSA9PSBcImJ1dHRvbkNsaWNrZWRcIil7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbkNsaWNrZWRcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyICA+IGRpdiA+IGRpdiA+IGltZ1wiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQ2xpY2thYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgICk7XG4gICAgc3dpdGNoKHRoaXMudGV4dENvbnRlbnQpe1xuICAgICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgICAgIGRpc3BsYXlBYm91dFBhZ2UoKTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgIGRpc3BsYXlNZW51UGFnZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgICAgICBkaXNwbGF5Q29udGFjdFBhZ2UoKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5rbm93biBidXR0b25cIik7XG4gICAgfVxuICAgIFxuXG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25DbGlja2FibGUnKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrZWQnKTtcblxuXG5cbiAgICBjb25zdCB1Zm9JY29uID0gbmV3IEltYWdlKCk7XG4gICAgdWZvSWNvbi5zcmMgPSB1Zm87XG4gICAgdWZvSWNvbi5jbGFzc0xpc3QuYWRkKCd1Zm8nKTtcbiAgICBcbiAgICB0aGlzLmFwcGVuZENoaWxkKHVmb0ljb24pO1xufVxuZnVuY3Rpb24gaGVhZGVyKCl7XG4gICAgZGlzcGxheUFib3V0UGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGJ1dHRvbkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWZvSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgdWZvSWNvbi5zcmMgPSB1Zm87XG4gICAgdWZvSWNvbi5jbGFzc0xpc3QuYWRkKCd1Zm8nKTtcbiAgICBidXR0b25XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25XcmFwcGVyXCIpO1xuXG4gICAgXG4gICAgYnV0dG9uQWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gICAgYnV0dG9uTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGJ1dHRvbkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGJ1dHRvbkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYnV0dG9uQ2xpY2tlZCk7XG4gICAgYnV0dG9uTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixidXR0b25DbGlja2VkKTtcblxuICAgIGJ1dHRvbkFib3V0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrZWQnKTtcbiAgICBidXR0b25BYm91dC5hcHBlbmRDaGlsZCh1Zm9JY29uKTtcbiAgICBidXR0b25Db250YWN0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNsaWNrYWJsZScpO1xuICAgIGJ1dHRvbk1lbnUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ2xpY2thYmxlJyk7XG5cblxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTHVuYXIgUGxhdGVzXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuXG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25BYm91dCk7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25NZW51KTtcbiAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhY3QpO1xuICAgICBcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgYW5jaG9ybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGFuY2hvcmxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9wbmd0cmVlLmNvbVwiO1xuICAgIGFuY2hvcmxpbmsudGV4dENvbnRlbnQgPSBcIlBuZ3RyZWUuY29tXCI7XG5cbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcImFsaWVuIFBORyBEZXNpZ25lZCBCeSBzZGVzaWducyBmcm9tIFwiO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3JsaW5rKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=