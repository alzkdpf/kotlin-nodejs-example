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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend-js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../common-js/build/classes/kotlin/main/common-js.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/WadeJensen/Dropbox/01_EN40/YEAR_5_SEM_2/kotlin-nodejs-example/common-js/build/classes/kotlin/main/common-js.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {\n  if (true)\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! kotlin */ \"../../../node_modules_imported/kotlin/kotlin.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  else {}\n}(this, function (_, Kotlin) {\n  'use strict';\n  var Kind_CLASS = Kotlin.Kind.CLASS;\n  var L1000 = Kotlin.Long.fromInt(1000);\n  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;\n  var L2 = Kotlin.Long.fromInt(2);\n  var IntRange = Kotlin.kotlin.ranges.IntRange;\n  var L0 = Kotlin.Long.ZERO;\n  var equals = Kotlin.equals;\n  var toList = Kotlin.kotlin.collections.toList_7wnvza$;\n  function Console() {\n  }\n  Console.prototype.println_61zpoe$ = function (s) {\n    console.log(s);\n  };\n  Console.$metadata$ = {\n    kind: Kind_CLASS,\n    simpleName: 'Console',\n    interfaces: [IConsole]\n  };\n  function main(args) {\n  }\n  function start() {\n    var shared = new SharedClass(new Console(), new Math_0());\n    shared.platform = 'JavaScript';\n    shared.printMe();\n    shared.printPrimes_s8cxhz$(L1000);\n  }\n  function Math_0() {\n    this.mathJs_0 = Math;\n  }\n  Math_0.prototype.sqrt_14dthe$ = function (x) {\n    return this.mathJs_0.sqrt(x);\n  };\n  Math_0.$metadata$ = {\n    kind: Kind_CLASS,\n    simpleName: 'Math',\n    interfaces: [IMath]\n  };\n  function IConsole() {\n  }\n  IConsole.$metadata$ = {\n    kind: Kind_INTERFACE,\n    simpleName: 'IConsole',\n    interfaces: []\n  };\n  function IMath() {\n  }\n  IMath.$metadata$ = {\n    kind: Kind_INTERFACE,\n    simpleName: 'IMath',\n    interfaces: []\n  };\n  function SharedClass(console, math) {\n    this.console = console;\n    this.math = math;\n    this.platform = '';\n  }\n  SharedClass.prototype.printMe = function () {\n    this.console.println_61zpoe$('Hello Kotlin!' + '\\n' + '\\n' + 'This is a shared code between multiple runtimes. Current platform: [' + this.platform + ']:');\n  };\n  SharedClass.prototype.printPrimes_s8cxhz$ = function (n) {\n    var tmp$;\n    tmp$ = this.calcPrimes_s8cxhz$(n).iterator();\n    while (tmp$.hasNext()) {\n      var i = tmp$.next();\n      this.console.println_61zpoe$(i.toString());\n    }\n  };\n  SharedClass.prototype.givePrimes_s8cxhz$ = function (n) {\n    return this.calcPrimes_s8cxhz$(n);\n  };\n  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;\n  SharedClass.prototype.calcPrimes_s8cxhz$ = function (n) {\n    var primes = ArrayList_init();\n    if (n.toNumber() > 0)\n      primes.add_11rb$(L2);\n    var c = 1;\n    var p = {v: 3.0};\n    var prime = {v: null};\n    while (n.toNumber() > 1) {\n      prime.v = true;\n      var sqrt = this.math.sqrt_14dthe$(p.v);\n      var $receiver = new IntRange(1, c);\n      var destination = ArrayList_init();\n      var tmp$;\n      tmp$ = $receiver.iterator();\n      while (tmp$.hasNext()) {\n        var element = tmp$.next();\n        if (primes.get_za3lpa$(element - 1 | 0).toNumber() < sqrt)\n          destination.add_11rb$(element);\n      }\n      var tmp$_0;\n      tmp$_0 = destination.iterator();\n      while (tmp$_0.hasNext()) {\n        var element_0 = tmp$_0.next();\n        if (equals(Kotlin.Long.fromNumber(p.v).modulo(primes.get_za3lpa$(element_0)), L0)) {\n          prime.v = false;\n        }\n      }\n      if (prime.v) {\n        primes.add_11rb$(Kotlin.Long.fromNumber(p.v));\n        c = c + 1 | 0;\n        if (equals(Kotlin.Long.fromInt(c), n)) {\n          break;\n        }\n      }\n      p.v += 2;\n    }\n    return toList(primes);\n  };\n  SharedClass.$metadata$ = {\n    kind: Kind_CLASS,\n    simpleName: 'SharedClass',\n    interfaces: []\n  };\n  var package$com = _.com || (_.com = {});\n  var package$wadejensen = package$com.wadejensen || (package$com.wadejensen = {});\n  var package$example = package$wadejensen.example || (package$wadejensen.example = {});\n  package$example.Console = Console;\n  package$example.main_vqirvp$ = main;\n  package$example.start = start;\n  package$example.Math = Math_0;\n  package$example.IConsole = IConsole;\n  package$example.IMath = IMath;\n  package$example.SharedClass = SharedClass;\n  main([]);\n  Kotlin.defineModule('common-js', _);\n  return _;\n}));\n\n//# sourceMappingURL=common-js.js.map\n\n\n//# sourceURL=webpack:///C:/Users/WadeJensen/Dropbox/01_EN40/YEAR_5_SEM_2/kotlin-nodejs-example/common-js/build/classes/kotlin/main/common-js.js?");

/***/ }),

/***/ "../../../node_modules/process/browser.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/WadeJensen/Dropbox/01_EN40/YEAR_5_SEM_2/kotlin-nodejs-example/frontend-js/build/node_modules/process/browser.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///C:/Users/WadeJensen/Dropbox/01_EN40/YEAR_5_SEM_2/kotlin-nodejs-example/frontend-js/build/node_modules/process/browser.js?");

/***/ }),

/***/ "../../../node_modules_imported/kotlin/kotlin.js":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/WadeJensen/Dropbox/01_EN40/YEAR_5_SEM_2/kotlin-nodejs-example/frontend-js/build/node_modules_imported/kotlin/kotlin.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./frontend-js.js":
/*!************************!*\
  !*** ./frontend-js.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {\n  if (true)\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! kotlin */ \"../../../node_modules_imported/kotlin/kotlin.js\"), __webpack_require__(/*! common-js */ \"../../../../../common-js/build/classes/kotlin/main/common-js.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  else {}\n}(this, function (_, Kotlin, $module$common_js) {\n  'use strict';\n  var Kind_CLASS = Kotlin.Kind.CLASS;\n  var IConsole = $module$common_js.com.wadejensen.example.IConsole;\n  var println = Kotlin.kotlin.io.println_s8jyv4$;\n  var Unit = Kotlin.kotlin.Unit;\n  var getCallableRef = Kotlin.getCallableRef;\n  var Math_0 = $module$common_js.com.wadejensen.example.Math;\n  var SharedClass = $module$common_js.com.wadejensen.example.SharedClass;\n  var L1000 = Kotlin.Long.fromInt(1000);\n  function DOMConsole() {\n  }\n  DOMConsole.prototype.println_61zpoe$ = function (s) {\n    var tmp$;\n    (tmp$ = document.getElementById('console')) != null ? tmp$.appendChild(document.createTextNode(s + '\\n')) : null;\n  };\n  DOMConsole.$metadata$ = {\n    kind: Kind_CLASS,\n    simpleName: 'DOMConsole',\n    interfaces: [IConsole]\n  };\n  function main$lambda(it) {\n    var tmp$;\n    println('DOMContentLoaded');\n    (tmp$ = document.getElementById('startButton')) != null ? (tmp$.addEventListener('click', getCallableRef('start', function (ev) {\n      return start(ev), Unit;\n    })), Unit) : null;\n    return Unit;\n  }\n  function main(args) {\n    println('main() web called');\n    document.addEventListener('DOMContentLoaded', main$lambda);\n  }\n  function start(ev) {\n    var shared = new SharedClass(new DOMConsole(), new Math_0());\n    shared.platform = 'JavaScript Browser';\n    shared.printMe();\n    shared.printPrimes_s8cxhz$(L1000);\n  }\n  var package$com = _.com || (_.com = {});\n  var package$wadejensen = package$com.wadejensen || (package$com.wadejensen = {});\n  var package$example = package$wadejensen.example || (package$wadejensen.example = {});\n  package$example.DOMConsole = DOMConsole;\n  package$example.main_vqirvp$ = main;\n  package$example.start_9ojx7i$ = start;\n  main([]);\n  Kotlin.defineModule('frontend-js', _);\n  return _;\n}));\n\n//# sourceMappingURL=frontend-js.js.map\n\n\n//# sourceURL=webpack:///./frontend-js.js?");

/***/ })

/******/ });