/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addFullScreen.js":
/*!******************************!*\
  !*** ./src/addFullScreen.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addFullScreenButton)\n/* harmony export */ });\n/* harmony import */ var _createHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTML */ \"./src/createHTML.js\");\n/* harmony import */ var _image_fullOpen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/fullOpen.png */ \"./src/image/fullOpen.png\");\n/* harmony import */ var _image_fullClose_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/fullClose.png */ \"./src/image/fullClose.png\");\n\n\n\nfunction addFullScreenButton(parent) {\n  var fullScreenContainer = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'fSContainer', parent);\n  var fullScreenButton = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('img', 'fullScreen', fullScreenContainer, _image_fullOpen_png__WEBPACK_IMPORTED_MODULE_1__.default);\n  fullScreenButton.addEventListener('click', openCloseFullScreen.bind(this));\n\n  document.onfullscreenchange = function (e) {\n    fullScreenButton.classList.toggle('open');\n    fullScreenButton.src = fullScreenButton.src === _image_fullOpen_png__WEBPACK_IMPORTED_MODULE_1__.default ? _image_fullClose_png__WEBPACK_IMPORTED_MODULE_2__.default : _image_fullOpen_png__WEBPACK_IMPORTED_MODULE_1__.default;\n  };\n\n  function openCloseFullScreen(e) {\n    if (e.target.classList.contains('open')) {\n      document.exitFullscreen();\n    } else {\n      document.body.requestFullscreen();\n    }\n  }\n}\n\n//# sourceURL=webpack://virtual-piano/./src/addFullScreen.js?");

/***/ }),

/***/ "./src/addHeader.js":
/*!**************************!*\
  !*** ./src/addHeader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addHeader)\n/* harmony export */ });\n/* harmony import */ var _createHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTML */ \"./src/createHTML.js\");\n\nfunction addHeader() {\n  var title = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('h1', 'header_title', document.getElementById('header'));\n  title.innerText = 'Virtual piano';\n}\n\n//# sourceURL=webpack://virtual-piano/./src/addHeader.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TONE\": () => (/* binding */ TONE),\n/* harmony export */   \"HALF_TONE\": () => (/* binding */ HALF_TONE)\n/* harmony export */ });\nvar TONE = [{\n  note: 'c4',\n  key: 'q',\n  keyCode: 'KeyQ',\n  shiftKey: false,\n  src: './sounds/c4.wav'\n}, {\n  note: 'd4',\n  key: 'w',\n  keyCode: 'KeyW',\n  shiftKey: false,\n  src: './sounds/d4.wav'\n}, {\n  note: 'e4',\n  key: 'e',\n  keyCode: 'KeyE',\n  shiftKey: false,\n  src: './sounds/e4.wav'\n}, {\n  note: 'f4',\n  key: 'r',\n  keyCode: 'KeyR',\n  shiftKey: false,\n  src: './sounds/f4.wav'\n}, {\n  note: 'g4',\n  key: 'i',\n  keyCode: 'KeyI',\n  shiftKey: false,\n  src: './sounds/g4.wav'\n}, {\n  note: 'a4',\n  key: 'o',\n  keyCode: 'KeyO',\n  shiftKey: false,\n  src: './sounds/a4.wav'\n}, {\n  note: 'b4',\n  key: 'p',\n  keyCode: 'KeyP',\n  shiftKey: false,\n  src: './sounds/b4.wav'\n}, {\n  note: 'c5',\n  key: 'a',\n  keyCode: 'KeyA',\n  shiftKey: false,\n  src: './sounds/c5.wav'\n}, {\n  note: 'd5',\n  key: 's',\n  keyCode: 'KeyS',\n  shiftKey: false,\n  src: './sounds/d5.wav'\n}, {\n  note: 'e5',\n  key: 'd',\n  keyCode: 'KeyD',\n  shiftKey: false,\n  src: './sounds/e5.wav'\n}, {\n  note: 'f5',\n  key: 'f',\n  keyCode: 'KeyF',\n  shiftKey: false,\n  src: './sounds/f5.wav'\n}, {\n  note: 'g5',\n  key: 'h',\n  keyCode: 'KeyH',\n  shiftKey: false,\n  src: './sounds/g5.wav'\n}, {\n  note: 'a5',\n  key: 'j',\n  keyCode: 'KeyJ',\n  shiftKey: false,\n  src: './sounds/a5.wav'\n}, {\n  note: 'b5',\n  key: 'k',\n  keyCode: 'KeyK',\n  shiftKey: false,\n  src: './sounds/b5.wav'\n}, {\n  note: 'c6',\n  key: 'z',\n  keyCode: 'KeyZ',\n  shiftKey: false,\n  src: './sounds/c6.wav'\n}, {\n  note: 'd6',\n  key: 'x',\n  keyCode: 'KeyX',\n  shiftKey: false,\n  src: './sounds/d6.wav'\n}, {\n  note: 'e6',\n  key: 'c',\n  keyCode: 'KeyC',\n  shiftKey: false,\n  src: './sounds/e6.wav'\n}, {\n  note: 'f6',\n  key: 'v',\n  keyCode: 'KeyV',\n  shiftKey: false,\n  src: './sounds/f6.wav'\n}, {\n  note: 'g6',\n  key: 'b',\n  keyCode: 'KeyB',\n  shiftKey: false,\n  src: './sounds/g6.wav'\n}, {\n  note: 'a6',\n  key: 'n',\n  keyCode: 'KeyN',\n  shiftKey: false,\n  src: './sounds/a6.wav'\n}, {\n  note: 'b6',\n  key: 'm',\n  keyCode: 'KeyM',\n  shiftKey: false,\n  src: './sounds/b6.wav'\n}];\nvar HALF_TONE = [{\n  note: 'c#4',\n  key: '⇧+q',\n  keyCode: 'KeyQ',\n  shiftKey: true,\n  src: './sounds/c4-2.wav'\n}, {\n  note: 'd#4',\n  key: '⇧+w',\n  keyCode: 'KeyW',\n  shiftKey: true,\n  src: './sounds/d4-2.wav'\n}, {\n  note: 'f#4',\n  key: '⇧+r',\n  keyCode: 'KeyR',\n  shiftKey: true,\n  src: './sounds/f4-2.wav'\n}, {\n  note: 'g#4',\n  key: '⇧+i',\n  keyCode: 'KeyI',\n  shiftKey: true,\n  src: './sounds/g4-2.wav'\n}, {\n  note: 'a#4',\n  key: '⇧+o',\n  keyCode: 'KeyO',\n  shiftKey: true,\n  src: './sounds/a4-2.wav'\n}, {\n  note: 'c#5',\n  key: '⇧+a',\n  keyCode: 'KeyA',\n  shiftKey: true,\n  src: './sounds/c5-2.wav'\n}, {\n  note: 'd#5',\n  key: '⇧+s',\n  keyCode: 'KeyS',\n  shiftKey: true,\n  src: './sounds/d5-2.wav'\n}, {\n  note: 'f#5',\n  key: '⇧+f',\n  keyCode: 'KeyF',\n  shiftKey: true,\n  src: './sounds/f5-2.wav'\n}, {\n  note: 'g#5',\n  key: '⇧+h',\n  keyCode: 'KeyH',\n  shiftKey: true,\n  src: './sounds/g5-2.wav'\n}, {\n  note: 'a#5',\n  key: '⇧+j',\n  keyCode: 'KeyJ',\n  shiftKey: true,\n  src: './sounds/a5-2.wav'\n}, {\n  note: 'c#6',\n  key: '⇧+z',\n  keyCode: 'KeyZ',\n  shiftKey: true,\n  src: './sounds/c6-2.wav'\n}, {\n  note: 'd#6',\n  key: '⇧+x',\n  keyCode: 'KeyX',\n  shiftKey: true,\n  src: './sounds/d6-2.wav'\n}, {\n  note: 'f#6',\n  key: '⇧+v',\n  keyCode: 'KeyV',\n  shiftKey: true,\n  src: './sounds/f6-2.wav'\n}, {\n  note: 'g#6',\n  key: '⇧+b',\n  keyCode: 'KeyB',\n  shiftKey: true,\n  src: './sounds/f6-2.wav'\n}, {\n  note: 'a#6',\n  key: '⇧+n',\n  keyCode: 'KeyN',\n  shiftKey: true,\n  src: './sounds/a6-2.wav'\n}];\n\n//# sourceURL=webpack://virtual-piano/./src/constants.js?");

/***/ }),

/***/ "./src/createHTML.js":
/*!***************************!*\
  !*** ./src/createHTML.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHTML)\n/* harmony export */ });\nfunction createHTML(tagName, className, parent, src) {\n  var element = document.createElement(tagName);\n  className.split(' ').forEach(function (el) {\n    return element.classList.add(el);\n  });\n  parent.append(element);\n\n  if (tagName === 'img' || tagName === 'audio') {\n    element.src = src;\n  }\n\n  if (tagName === 'a') {\n    element.href = 'src';\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://virtual-piano/./src/createHTML.js?");

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ importAll)\n/* harmony export */ });\nfunction importAll(r) {\n  return r.keys().map(r);\n}\n\n//# sourceURL=webpack://virtual-piano/./src/imports.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTML */ \"./src/createHTML.js\");\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.sass */ \"./src/styles/styles.sass\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imports */ \"./src/imports.js\");\n/* harmony import */ var _addFullScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addFullScreen */ \"./src/addFullScreen.js\");\n/* harmony import */ var _addHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addHeader */ \"./src/addHeader.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Piano = /*#__PURE__*/function () {\n  function Piano() {\n    var _this = this;\n\n    _classCallCheck(this, Piano);\n\n    _defineProperty(this, \"TONE_LINKS\", []);\n\n    _defineProperty(this, \"HALF_TONE_LINKS\", []);\n\n    _defineProperty(this, \"AUDIO_TONE\", []);\n\n    _defineProperty(this, \"AUDIO_HALF_TONE\", []);\n\n    _defineProperty(this, \"HALF_TONE_TITLE\", []);\n\n    _defineProperty(this, \"TONE_TITLE\", []);\n\n    _defineProperty(this, \"makeContainer\", function () {\n      _this.piano = document.getElementById('piano');\n      _this.pianoContainer = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'piano__container', _this.piano);\n\n      _this.pianoContainer.setAttribute('draggable', 'false');\n    });\n\n    _defineProperty(this, \"makeWhiteKeys\", function () {\n      for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_2__.TONE.length; i += 1) {\n        var tone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', \"tone tone__\".concat(i), _this.pianoContainer);\n        tone.id = \"TONE_\".concat(i);\n        tone.setAttribute('draggable', 'false');\n\n        _this.TONE_LINKS.push(tone);\n\n        var audioTone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('audio', \"audio-tone_\".concat(i), tone, _constants__WEBPACK_IMPORTED_MODULE_2__.TONE[i].src);\n\n        _this.AUDIO_TONE.push(audioTone);\n      }\n    });\n\n    _defineProperty(this, \"makeBlackKeys\", function () {\n      for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE.length; i += 1) {\n        var halfTone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', \"half_tone half_tone_\".concat(i), _this.pianoContainer);\n        halfTone.id = \"HALF_TONE_\".concat(i);\n\n        _this.HALF_TONE_LINKS.push(halfTone);\n\n        var audioHalfTone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('audio', \"audio-tone_\".concat(i), halfTone, _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE[i].src);\n\n        _this.AUDIO_HALF_TONE.push(audioHalfTone);\n      }\n    });\n\n    _defineProperty(this, \"makeEventListener\", function () {\n      var elem = document.querySelector('.piano__container');\n\n      _this.pianoContainer.addEventListener('mousedown', mouseDown.bind(_this));\n\n      document.addEventListener('mouseup', mouseUp.bind(_this));\n      document.addEventListener('mouseover', mouseOver.bind(_this));\n      document.addEventListener('mouseout', mouseOut.bind(_this));\n      document.addEventListener('dragstart', function (e) {\n        e.preventDefault();\n      });\n      var isDown = false;\n\n      function mouseDown(e) {\n        isDown = true;\n\n        if (e.target.classList.contains('tone')) {\n          var toneIndex = e.target.id.split('_')[1];\n          var tone = this.AUDIO_TONE[toneIndex];\n          this.TONE_TITLE[toneIndex].classList.add('title_pushed');\n          this.currentTitle = this.TONE_TITLE[toneIndex];\n          this.stopPlayAudio(tone);\n          e.target.classList.add('tone_pushed');\n        } else if (e.target.classList.contains('half_tone')) {\n          var halfToneIndex = e.target.classList[1].split('_')[2];\n          var halfTone = this.AUDIO_HALF_TONE[halfToneIndex];\n          this.HALF_TONE_TITLE[halfToneIndex].classList.add('title_pushed');\n          this.currentTitle = this.HALF_TONE_TITLE[halfToneIndex];\n          this.stopPlayAudio(halfTone);\n          e.target.classList.add('half_tone_pushed');\n        }\n      }\n\n      function mouseUp(e) {\n        isDown = false;\n\n        try {\n          if (e.target.classList.contains('tone')) {\n            e.target.classList.remove('tone_pushed');\n          }\n\n          if (e.target.classList.contains('half_tone')) {\n            e.target.classList.remove('half_tone_pushed');\n          }\n\n          this.currentTitle.classList.remove('title_pushed');\n        } catch (e) {}\n      }\n\n      function mouseOver(e) {\n        if (isDown) {\n          if (e.target.classList.contains('tone')) {\n            var toneIndex = e.target.id.split('_')[1];\n            var tone = this.AUDIO_TONE[toneIndex];\n            this.TONE_TITLE[toneIndex].classList.add('title_pushed');\n            this.currentTitle = this.TONE_TITLE[toneIndex];\n            this.stopPlayAudio(tone);\n            e.target.classList.add('tone_pushed');\n          } else if (e.target.classList.contains('half_tone')) {\n            var halfToneIndex = e.target.classList[1].split('_')[2];\n            var halfTone = this.AUDIO_HALF_TONE[halfToneIndex];\n            this.HALF_TONE_TITLE[halfToneIndex].classList.add('title_pushed');\n            this.currentTitle = this.HALF_TONE_TITLE[halfToneIndex];\n            this.stopPlayAudio(halfTone);\n            e.target.classList.add('half_tone_pushed');\n          }\n        }\n      }\n\n      function mouseOut(e) {\n        try {\n          if (e.target.classList.contains('tone')) {\n            e.target.classList.remove('tone_pushed');\n          }\n\n          if (e.target.classList.contains('half_tone')) {\n            e.target.classList.remove('half_tone_pushed');\n          }\n\n          this.currentTitle.classList.remove('title_pushed');\n        } catch (err) {}\n      }\n    });\n\n    this.sound = (0,_imports__WEBPACK_IMPORTED_MODULE_3__.default)(__webpack_require__(\"./src/sounds sync \\\\.wav$\"));\n    this.makeContainer();\n    this.makeWhiteKeys();\n    this.makeBlackKeys();\n    this.addKeyTitles();\n    this.makeEventListener();\n    this.addKeyListener();\n    (0,_addFullScreen__WEBPACK_IMPORTED_MODULE_4__.default)(this.piano);\n    this.addVolumeChanger();\n    this.addCheckBox();\n    this.volume = 1;\n    this.currentKey = null;\n    this.currentTitle = null;\n  }\n\n  _createClass(Piano, [{\n    key: \"stopPlayAudio\",\n    value: function stopPlayAudio(audioTag) {\n      audioTag.volume = this.volume;\n      audioTag.pause();\n      audioTag.currentTime = 0;\n      audioTag.play();\n    }\n  }, {\n    key: \"addKeyListener\",\n    value: function addKeyListener() {\n      window.addEventListener('keydown', keyDown.bind(this));\n      window.addEventListener('keyup', keyUp.bind(this));\n\n      function keyDown(e) {\n        var toneIndex = _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE.findIndex(function (el) {\n          return el.keyCode === e.code;\n        }) && _constants__WEBPACK_IMPORTED_MODULE_2__.TONE.findIndex(function (el) {\n          return el.keyCode === e.code;\n        });\n\n        if (e.shiftKey && toneIndex >= 0 && !e.repeat) {\n          this.HALF_TONE_LINKS[toneIndex].classList.add('half_tone_pushed');\n          this.stopPlayAudio(this.AUDIO_HALF_TONE[toneIndex]);\n          this.currentKey = this.HALF_TONE_LINKS[toneIndex];\n          this.HALF_TONE_TITLE[toneIndex].classList.add('title_pushed');\n          this.currentTitle = this.HALF_TONE_TITLE[toneIndex];\n        } else if (toneIndex >= 0 && !e.repeat) {\n          this.TONE_LINKS[toneIndex].classList.add('tone_pushed');\n          e.target.classList.add('tone_pushed');\n          this.stopPlayAudio(this.AUDIO_TONE[toneIndex]);\n          this.currentKey = this.TONE_LINKS[toneIndex];\n          this.TONE_TITLE[toneIndex].classList.add('title_pushed');\n          this.currentTitle = this.TONE_TITLE[toneIndex];\n        }\n      }\n\n      function keyUp(e) {\n        document.querySelectorAll('.half_tone_pushed').forEach(function (el) {\n          return el.classList.remove('half_tone_pushed');\n        });\n        document.querySelectorAll('.tone_pushed').forEach(function (el) {\n          return el.classList.remove('tone_pushed');\n        });\n        document.querySelectorAll('.title_pushed').forEach(function (el) {\n          return el.classList.remove('title_pushed');\n        });\n      }\n    }\n  }, {\n    key: \"addCheckBox\",\n    value: function addCheckBox() {\n      var checkContainer = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'check_container', this.piano);\n      var notesTitle = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'check_title', checkContainer);\n      notesTitle.innerText = 'notes';\n      var checkbox = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('label', 'switch', checkContainer);\n      var keysTitle = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'check_title', checkContainer);\n      keysTitle.innerText = 'letters';\n      var check = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('input', 'checkbox', checkbox);\n      check.type = 'checkbox';\n      var round = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'slider round', checkbox);\n      check.addEventListener('click', this.updateKeysTitle.bind(this));\n    }\n  }, {\n    key: \"updateKeysTitle\",\n    value: function updateKeysTitle(e) {\n      if (e.target.checked) {\n        this.TONE_TITLE.forEach(function (el, idx) {\n          return el.innerText = _constants__WEBPACK_IMPORTED_MODULE_2__.TONE[idx].key;\n        });\n        this.HALF_TONE_TITLE.forEach(function (el, idx) {\n          return el.innerText = _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE[idx].key;\n        });\n      } else {\n        this.TONE_TITLE.forEach(function (el, idx) {\n          return el.innerText = _constants__WEBPACK_IMPORTED_MODULE_2__.TONE[idx].note;\n        });\n        this.HALF_TONE_TITLE.forEach(function (el, idx) {\n          return el.innerText = _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE[idx].note;\n        });\n      }\n    }\n  }, {\n    key: \"addKeyTitles\",\n    value: function addKeyTitles() {\n      var _this2 = this;\n\n      var titleHalfTone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'titleHalfTone', this.piano);\n      var titleTone = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'titleContainer', this.piano);\n      _constants__WEBPACK_IMPORTED_MODULE_2__.TONE.forEach(function (el, idx) {\n        var keyTitle = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', \"tone_Key-\".concat(idx), titleTone);\n        keyTitle.innerText = el.note;\n\n        _this2.TONE_TITLE.push(keyTitle);\n      });\n      _constants__WEBPACK_IMPORTED_MODULE_2__.HALF_TONE.forEach(function (el, idx) {\n        var keyTitle = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', \"half_tone_Key-\".concat(idx), titleHalfTone);\n        keyTitle.innerText = el.note;\n\n        _this2.HALF_TONE_TITLE.push(keyTitle);\n      });\n    }\n  }, {\n    key: \"addVolumeChanger\",\n    value: function addVolumeChanger() {\n      var volumeContainer = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'volumeContainer', this.piano);\n      var volumeName = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('p', 'volumeName', volumeContainer);\n      volumeName.innerText = 'Volume';\n      var volumeValues = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'volumeValues', volumeContainer);\n      ['0%', '|', '|', '|', '|', '50%', '|', '|', '|', '|', '100%'].forEach(function (el) {\n        var element = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'elem', volumeValues);\n        element.innerText = el;\n      });\n      var ranger = (0,_createHTML__WEBPACK_IMPORTED_MODULE_0__.default)('input', 'volumeRanger', volumeContainer);\n      ranger.type = 'range';\n      ranger.min = 0;\n      ranger.max = 10;\n      ranger.addEventListener('click', setVolume.bind(this));\n\n      function setVolume() {\n        this.volume = ranger.value / 10;\n      }\n    }\n  }]);\n\n  return Piano;\n}();\n\nvar piano = new Piano();\n(0,_addHeader__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://virtual-piano/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.sass":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.sass ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_pianoBack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/pianoBack.png */ \"./src/image/pianoBack.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_image_pianoBack_png__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100vh;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  overflow-y: hidden;\\n  background: black; }\\n  body .header {\\n    width: 100vw;\\n    height: 50px;\\n    color: white;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center;\\n    font-family: 'Dancing Script', cursive;\\n    font-size: 1.3em; }\\n    body .header h1 {\\n      margin: 0;\\n      padding: 0; }\\n  body #piano {\\n    width: 1000px;\\n    height: 550px;\\n    border: 1px solid white;\\n    border-radius: 10px 10px;\\n    background: rgba(76, 76, 76, 0.4) url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: contain;\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    -webkit-box-pack: end;\\n        -ms-flex-pack: end;\\n            justify-content: flex-end;\\n    -webkit-box-align: center;\\n        -ms-flex-align: center;\\n            align-items: center;\\n    padding: 10px 10px;\\n    position: relative; }\\n    body #piano .piano__container {\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between;\\n      width: 100%;\\n      height: 65%;\\n      border-radius: 5px;\\n      overflow: hidden;\\n      padding-top: 3px;\\n      position: relative;\\n      -webkit-box-ordinal-group: 3;\\n          -ms-flex-order: 2;\\n              order: 2; }\\n      body #piano .piano__container .tone {\\n        height: 99%;\\n        width: 13%;\\n        border: 1px solid black;\\n        border-radius: 0 0 15px 15px;\\n        background: white;\\n        -webkit-transform: scale(1);\\n                transform: scale(1);\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s;\\n        cursor: pointer; }\\n      body #piano .piano__container .tone:hover {\\n        background: #e3e3e3; }\\n      body #piano .piano__container .tone_pushed {\\n        -webkit-transform: scale(0.9, 1);\\n                transform: scale(0.9, 1);\\n        height: 95%;\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s; }\\n      body #piano .piano__container .half_tone {\\n        position: absolute;\\n        width: 3.5%;\\n        height: 60%;\\n        border-radius: 0 0 10px 10px;\\n        background: #000000;\\n        z-index: 99;\\n        cursor: pointer;\\n        -webkit-transition: 0.5s;\\n        transition: 0.5s; }\\n      body #piano .piano__container .half_tone:hover {\\n        background: #1a1a1a; }\\n      body #piano .piano__container .half_tone_pushed {\\n        -webkit-box-sizing: border-box;\\n                box-sizing: border-box;\\n        -webkit-transform: scale(0.95, 1);\\n                transform: scale(0.95, 1);\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s;\\n        border-bottom: 2px solid white;\\n        border-left: 2px solid white;\\n        border-right: 2px solid white; }\\n      body #piano .piano__container .half_tone_0 {\\n        left: 3%; }\\n      body #piano .piano__container .half_tone_1 {\\n        left: 7.75%; }\\n      body #piano .piano__container .half_tone_2 {\\n        left: 17.5%; }\\n      body #piano .piano__container .half_tone_3 {\\n        left: 22%; }\\n      body #piano .piano__container .half_tone_4 {\\n        left: 26.75%; }\\n      body #piano .piano__container .half_tone_5 {\\n        left: 36.25%; }\\n      body #piano .piano__container .half_tone_6 {\\n        left: 41%; }\\n      body #piano .piano__container .half_tone_7 {\\n        left: 50.5%; }\\n      body #piano .piano__container .half_tone_8 {\\n        left: 55.25%; }\\n      body #piano .piano__container .half_tone_9 {\\n        left: 60%; }\\n      body #piano .piano__container .half_tone_10 {\\n        left: 69.75%; }\\n      body #piano .piano__container .half_tone_11 {\\n        left: 74.25%; }\\n      body #piano .piano__container .half_tone_12 {\\n        left: 84%; }\\n      body #piano .piano__container .half_tone_13 {\\n        left: 88.75%; }\\n      body #piano .piano__container .half_tone_14 {\\n        left: 93.50%; }\\n    body #piano .titleContainer {\\n      height: 20px;\\n      width: 98%;\\n      color: white;\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between;\\n      margin-top: 5px;\\n      -webkit-box-ordinal-group: 4;\\n          -ms-flex-order: 3;\\n              order: 3; }\\n      body #piano .titleContainer div:nth-child(n) {\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s; }\\n      body #piano .titleContainer .title_pushed {\\n        -webkit-transform: scale(1.8);\\n                transform: scale(1.8);\\n        color: #ff5959; }\\n    body #piano .titleHalfTone {\\n      position: relative;\\n      -webkit-box-ordinal-group: 2;\\n          -ms-flex-order: 1;\\n              order: 1;\\n      height: 20px;\\n      width: 100%;\\n      color: white; }\\n      body #piano .titleHalfTone div:nth-of-type(n) {\\n        position: absolute;\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s; }\\n      body #piano .titleHalfTone .half_tone_Key-0 {\\n        left: 3%; }\\n      body #piano .titleHalfTone .half_tone_Key-1 {\\n        left: 7.75%; }\\n      body #piano .titleHalfTone .half_tone_Key-2 {\\n        left: 17.5%; }\\n      body #piano .titleHalfTone .half_tone_Key-3 {\\n        left: 22%; }\\n      body #piano .titleHalfTone .half_tone_Key-4 {\\n        left: 26.75%; }\\n      body #piano .titleHalfTone .half_tone_Key-5 {\\n        left: 36.25%; }\\n      body #piano .titleHalfTone .half_tone_Key-6 {\\n        left: 41%; }\\n      body #piano .titleHalfTone .half_tone_Key-7 {\\n        left: 50.5%; }\\n      body #piano .titleHalfTone .half_tone_Key-8 {\\n        left: 55.25%; }\\n      body #piano .titleHalfTone .half_tone_Key-9 {\\n        left: 60%; }\\n      body #piano .titleHalfTone .half_tone_Key-10 {\\n        left: 69.75%; }\\n      body #piano .titleHalfTone .half_tone_Key-11 {\\n        left: 74.25%; }\\n      body #piano .titleHalfTone .half_tone_Key-12 {\\n        left: 84%; }\\n      body #piano .titleHalfTone .half_tone_Key-13 {\\n        left: 88.75%; }\\n      body #piano .titleHalfTone .half_tone_Key-14 {\\n        left: 93.50%; }\\n      body #piano .titleHalfTone .title_pushed {\\n        -webkit-transform: scale(1.5);\\n                transform: scale(1.5);\\n        color: #ff5959; }\\n    body #piano .check_container {\\n      position: absolute;\\n      width: 220px;\\n      height: 50px;\\n      top: 6%;\\n      left: 50%;\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: justify;\\n          -ms-flex-pack: justify;\\n              justify-content: space-between;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center; }\\n      body #piano .check_container .check_title {\\n        color: white;\\n        font-family: 'Dancing Script', cursive;\\n        font-size: 1.5em; }\\n      body #piano .check_container .switch {\\n        position: relative;\\n        display: inline-block;\\n        width: 120px;\\n        height: 30px; }\\n        body #piano .check_container .switch input {\\n          display: none; }\\n        body #piano .check_container .switch .slider {\\n          position: absolute;\\n          cursor: pointer;\\n          top: 0;\\n          left: 0;\\n          right: 0;\\n          bottom: 0;\\n          background-color: #000000;\\n          -webkit-transition: 0.4s;\\n          transition: 0.4s; }\\n        body #piano .check_container .switch .slider:before {\\n          position: absolute;\\n          content: \\\"\\\";\\n          text-align: center;\\n          vertical-align: middle;\\n          height: 40px;\\n          width: 40px;\\n          bottom: -6px;\\n          left: 3px;\\n          background-color: #434343;\\n          border: 1px solid #ffffff;\\n          -webkit-transition: 0.5s;\\n          transition: 0.5s; }\\n        body #piano .check_container .switch input:checked + .slider:before {\\n          -webkit-transform: translate(72px);\\n                  transform: translate(72px); }\\n        body #piano .check_container .switch .round {\\n          border-radius: 24px; }\\n        body #piano .check_container .switch .round:before {\\n          border-radius: 50%; }\\n    body #piano .fSContainer {\\n      width: 54px;\\n      height: 52px;\\n      position: absolute;\\n      right: 1%;\\n      top: 1%;\\n      background: white;\\n      overflow: hidden;\\n      border: 2px solid black;\\n      border-radius: 10px;\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-pack: center;\\n          -ms-flex-pack: center;\\n              justify-content: center;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      -webkit-transition: 0.2s;\\n      transition: 0.2s;\\n      background: rgba(255, 255, 255, 0.8); }\\n      body #piano .fSContainer .fullScreen {\\n        width: 50px;\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s; }\\n      body #piano .fSContainer .fullScreen:hover {\\n        -webkit-transform: scale(1.1);\\n                transform: scale(1.1);\\n        -webkit-transition: 0.2s;\\n        transition: 0.2s; }\\n    body #piano .volumeContainer {\\n      position: absolute;\\n      top: 2%;\\n      left: 3%;\\n      height: 100px;\\n      display: -webkit-box;\\n      display: -ms-flexbox;\\n      display: flex;\\n      -webkit-box-orient: vertical;\\n      -webkit-box-direction: normal;\\n          -ms-flex-direction: column;\\n              flex-direction: column; }\\n      body #piano .volumeContainer .volumeName {\\n        color: white;\\n        padding: 0;\\n        margin: 1%;\\n        font-family: 'Dancing Script', cursive;\\n        font-size: 24px;\\n        font-weight: bold;\\n        text-align: center; }\\n      body #piano .volumeContainer .volumeValues {\\n        color: white;\\n        font-family: 'Dancing Script', cursive;\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        -webkit-box-pack: justify;\\n            -ms-flex-pack: justify;\\n                justify-content: space-between; }\\n      body #piano .volumeContainer input[type='range'] {\\n        width: 200px;\\n        height: 15px;\\n        -webkit-appearance: none;\\n        background-color: #000000;\\n        border-radius: 10px;\\n        outline-style: none; }\\n      body #piano .volumeContainer input[type=range]::-webkit-slider-thumb {\\n        -webkit-appearance: none;\\n        border: 1px solid #6d6b6b;\\n        height: 50px;\\n        width: 30px;\\n        border-radius: 3px;\\n        background: #393939;\\n        cursor: pointer;\\n        margin-top: 25px;\\n        -webkit-box-shadow: 3px 3px 3px #000000;\\n                box-shadow: 3px 3px 3px #000000; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-piano/./src/styles/styles.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-piano/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://virtual-piano/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/sounds/a4-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/a4-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a4-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a4-2.wav?");

/***/ }),

/***/ "./src/sounds/a4.wav":
/*!***************************!*\
  !*** ./src/sounds/a4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a4.wav?");

/***/ }),

/***/ "./src/sounds/a5-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/a5-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a5-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a5-2.wav?");

/***/ }),

/***/ "./src/sounds/a5.wav":
/*!***************************!*\
  !*** ./src/sounds/a5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a5.wav?");

/***/ }),

/***/ "./src/sounds/a6-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/a6-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a6-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a6-2.wav?");

/***/ }),

/***/ "./src/sounds/a6.wav":
/*!***************************!*\
  !*** ./src/sounds/a6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/a6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/a6.wav?");

/***/ }),

/***/ "./src/sounds/b4.wav":
/*!***************************!*\
  !*** ./src/sounds/b4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/b4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/b4.wav?");

/***/ }),

/***/ "./src/sounds/b5.wav":
/*!***************************!*\
  !*** ./src/sounds/b5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/b5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/b5.wav?");

/***/ }),

/***/ "./src/sounds/b6.wav":
/*!***************************!*\
  !*** ./src/sounds/b6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/b6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/b6.wav?");

/***/ }),

/***/ "./src/sounds/c4-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/c4-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c4-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c4-2.wav?");

/***/ }),

/***/ "./src/sounds/c4.wav":
/*!***************************!*\
  !*** ./src/sounds/c4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c4.wav?");

/***/ }),

/***/ "./src/sounds/c5-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/c5-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c5-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c5-2.wav?");

/***/ }),

/***/ "./src/sounds/c5.wav":
/*!***************************!*\
  !*** ./src/sounds/c5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c5.wav?");

/***/ }),

/***/ "./src/sounds/c6-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/c6-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c6-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c6-2.wav?");

/***/ }),

/***/ "./src/sounds/c6.wav":
/*!***************************!*\
  !*** ./src/sounds/c6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/c6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/c6.wav?");

/***/ }),

/***/ "./src/sounds/d4-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/d4-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d4-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d4-2.wav?");

/***/ }),

/***/ "./src/sounds/d4.wav":
/*!***************************!*\
  !*** ./src/sounds/d4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d4.wav?");

/***/ }),

/***/ "./src/sounds/d5-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/d5-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d5-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d5-2.wav?");

/***/ }),

/***/ "./src/sounds/d5.wav":
/*!***************************!*\
  !*** ./src/sounds/d5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d5.wav?");

/***/ }),

/***/ "./src/sounds/d6-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/d6-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d6-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d6-2.wav?");

/***/ }),

/***/ "./src/sounds/d6.wav":
/*!***************************!*\
  !*** ./src/sounds/d6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/d6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/d6.wav?");

/***/ }),

/***/ "./src/sounds/e4.wav":
/*!***************************!*\
  !*** ./src/sounds/e4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/e4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/e4.wav?");

/***/ }),

/***/ "./src/sounds/e5.wav":
/*!***************************!*\
  !*** ./src/sounds/e5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/e5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/e5.wav?");

/***/ }),

/***/ "./src/sounds/e6.wav":
/*!***************************!*\
  !*** ./src/sounds/e6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/e6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/e6.wav?");

/***/ }),

/***/ "./src/sounds/f4-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/f4-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f4-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f4-2.wav?");

/***/ }),

/***/ "./src/sounds/f4.wav":
/*!***************************!*\
  !*** ./src/sounds/f4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f4.wav?");

/***/ }),

/***/ "./src/sounds/f5-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/f5-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f5-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f5-2.wav?");

/***/ }),

/***/ "./src/sounds/f5.wav":
/*!***************************!*\
  !*** ./src/sounds/f5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f5.wav?");

/***/ }),

/***/ "./src/sounds/f6-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/f6-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f6-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f6-2.wav?");

/***/ }),

/***/ "./src/sounds/f6.wav":
/*!***************************!*\
  !*** ./src/sounds/f6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/f6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/f6.wav?");

/***/ }),

/***/ "./src/sounds/g4-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/g4-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g4-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g4-2.wav?");

/***/ }),

/***/ "./src/sounds/g4.wav":
/*!***************************!*\
  !*** ./src/sounds/g4.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g4.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g4.wav?");

/***/ }),

/***/ "./src/sounds/g5-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/g5-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g5-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g5-2.wav?");

/***/ }),

/***/ "./src/sounds/g5.wav":
/*!***************************!*\
  !*** ./src/sounds/g5.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g5.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g5.wav?");

/***/ }),

/***/ "./src/sounds/g6-2.wav":
/*!*****************************!*\
  !*** ./src/sounds/g6-2.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g6-2.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g6-2.wav?");

/***/ }),

/***/ "./src/sounds/g6.wav":
/*!***************************!*\
  !*** ./src/sounds/g6.wav ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sounds/g6.wav\");\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/g6.wav?");

/***/ }),

/***/ "./src/image/fullClose.png":
/*!*********************************!*\
  !*** ./src/image/fullClose.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fullClose.png\");\n\n//# sourceURL=webpack://virtual-piano/./src/image/fullClose.png?");

/***/ }),

/***/ "./src/image/fullOpen.png":
/*!********************************!*\
  !*** ./src/image/fullOpen.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fullOpen.png\");\n\n//# sourceURL=webpack://virtual-piano/./src/image/fullOpen.png?");

/***/ }),

/***/ "./src/image/pianoBack.png":
/*!*********************************!*\
  !*** ./src/image/pianoBack.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pianoBack.png\");\n\n//# sourceURL=webpack://virtual-piano/./src/image/pianoBack.png?");

/***/ }),

/***/ "./src/styles/styles.sass":
/*!********************************!*\
  !*** ./src/styles/styles.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://virtual-piano/./src/styles/styles.sass?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-piano/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/sounds sync \\.wav$":
/*!**********************************************!*\
  !*** ./src/sounds/ sync nonrecursive \.wav$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./a4-2.wav\": \"./src/sounds/a4-2.wav\",\n\t\"./a4.wav\": \"./src/sounds/a4.wav\",\n\t\"./a5-2.wav\": \"./src/sounds/a5-2.wav\",\n\t\"./a5.wav\": \"./src/sounds/a5.wav\",\n\t\"./a6-2.wav\": \"./src/sounds/a6-2.wav\",\n\t\"./a6.wav\": \"./src/sounds/a6.wav\",\n\t\"./b4.wav\": \"./src/sounds/b4.wav\",\n\t\"./b5.wav\": \"./src/sounds/b5.wav\",\n\t\"./b6.wav\": \"./src/sounds/b6.wav\",\n\t\"./c4-2.wav\": \"./src/sounds/c4-2.wav\",\n\t\"./c4.wav\": \"./src/sounds/c4.wav\",\n\t\"./c5-2.wav\": \"./src/sounds/c5-2.wav\",\n\t\"./c5.wav\": \"./src/sounds/c5.wav\",\n\t\"./c6-2.wav\": \"./src/sounds/c6-2.wav\",\n\t\"./c6.wav\": \"./src/sounds/c6.wav\",\n\t\"./d4-2.wav\": \"./src/sounds/d4-2.wav\",\n\t\"./d4.wav\": \"./src/sounds/d4.wav\",\n\t\"./d5-2.wav\": \"./src/sounds/d5-2.wav\",\n\t\"./d5.wav\": \"./src/sounds/d5.wav\",\n\t\"./d6-2.wav\": \"./src/sounds/d6-2.wav\",\n\t\"./d6.wav\": \"./src/sounds/d6.wav\",\n\t\"./e4.wav\": \"./src/sounds/e4.wav\",\n\t\"./e5.wav\": \"./src/sounds/e5.wav\",\n\t\"./e6.wav\": \"./src/sounds/e6.wav\",\n\t\"./f4-2.wav\": \"./src/sounds/f4-2.wav\",\n\t\"./f4.wav\": \"./src/sounds/f4.wav\",\n\t\"./f5-2.wav\": \"./src/sounds/f5-2.wav\",\n\t\"./f5.wav\": \"./src/sounds/f5.wav\",\n\t\"./f6-2.wav\": \"./src/sounds/f6-2.wav\",\n\t\"./f6.wav\": \"./src/sounds/f6.wav\",\n\t\"./g4-2.wav\": \"./src/sounds/g4-2.wav\",\n\t\"./g4.wav\": \"./src/sounds/g4.wav\",\n\t\"./g5-2.wav\": \"./src/sounds/g5-2.wav\",\n\t\"./g5.wav\": \"./src/sounds/g5.wav\",\n\t\"./g6-2.wav\": \"./src/sounds/g6-2.wav\",\n\t\"./g6.wav\": \"./src/sounds/g6.wav\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/sounds sync \\\\.wav$\";\n\n//# sourceURL=webpack://virtual-piano/./src/sounds/_sync_nonrecursive_\\.wav$?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;