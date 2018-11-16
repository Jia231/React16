(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./js/button/index.js");
})({
    "../node_modules/assert/assert.js": function(module, exports, __webpack_require__) {
        (function(global) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            function compare(a, b) {
                if (a === b) {
                    return 0;
                }
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                }
                if (x < y) {
                    return -1;
                }
                if (y < x) {
                    return 1;
                }
                return 0;
            }
            function isBuffer(b) {
                if (global.Buffer && typeof global.Buffer.isBuffer === "function") {
                    return global.Buffer.isBuffer(b);
                }
                return !!(b != null && b._isBuffer);
            }
            var util = __webpack_require__("../node_modules/util/util.js");
            var hasOwn = Object.prototype.hasOwnProperty;
            var pSlice = Array.prototype.slice;
            var functionsHaveNames = function() {
                return function foo() {}.name === "foo";
            }();
            function pToString(obj) {
                return Object.prototype.toString.call(obj);
            }
            function isView(arrbuf) {
                if (isBuffer(arrbuf)) {
                    return false;
                }
                if (typeof global.ArrayBuffer !== "function") {
                    return false;
                }
                if (typeof ArrayBuffer.isView === "function") {
                    return ArrayBuffer.isView(arrbuf);
                }
                if (!arrbuf) {
                    return false;
                }
                if (arrbuf instanceof DataView) {
                    return true;
                }
                if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
                    return true;
                }
                return false;
            }
            var assert = module.exports = ok;
            var regex = /\s*function\s+([^\(\s]*)\s*/;
            function getName(func) {
                if (!util.isFunction(func)) {
                    return;
                }
                if (functionsHaveNames) {
                    return func.name;
                }
                var str = func.toString();
                var match = str.match(regex);
                return match && match[1];
            }
            assert.AssertionError = function AssertionError(options) {
                this.name = "AssertionError";
                this.actual = options.actual;
                this.expected = options.expected;
                this.operator = options.operator;
                if (options.message) {
                    this.message = options.message;
                    this.generatedMessage = false;
                } else {
                    this.message = getMessage(this);
                    this.generatedMessage = true;
                }
                var stackStartFunction = options.stackStartFunction || fail;
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, stackStartFunction);
                } else {
                    var err = new Error();
                    if (err.stack) {
                        var out = err.stack;
                        var fn_name = getName(stackStartFunction);
                        var idx = out.indexOf("\n" + fn_name);
                        if (idx >= 0) {
                            var next_line = out.indexOf("\n", idx + 1);
                            out = out.substring(next_line + 1);
                        }
                        this.stack = out;
                    }
                }
            };
            util.inherits(assert.AssertionError, Error);
            function truncate(s, n) {
                if (typeof s === "string") {
                    return s.length < n ? s : s.slice(0, n);
                } else {
                    return s;
                }
            }
            function inspect(something) {
                if (functionsHaveNames || !util.isFunction(something)) {
                    return util.inspect(something);
                }
                var rawname = getName(something);
                var name = rawname ? ": " + rawname : "";
                return "[Function" + name + "]";
            }
            function getMessage(self) {
                return truncate(inspect(self.actual), 128) + " " + self.operator + " " + truncate(inspect(self.expected), 128);
            }
            function fail(actual, expected, message, operator, stackStartFunction) {
                throw new assert.AssertionError({
                    message: message,
                    actual: actual,
                    expected: expected,
                    operator: operator,
                    stackStartFunction: stackStartFunction
                });
            }
            assert.fail = fail;
            function ok(value, message) {
                if (!value) fail(value, true, message, "==", assert.ok);
            }
            assert.ok = ok;
            assert.equal = function equal(actual, expected, message) {
                if (actual != expected) fail(actual, expected, message, "==", assert.equal);
            };
            assert.notEqual = function notEqual(actual, expected, message) {
                if (actual == expected) {
                    fail(actual, expected, message, "!=", assert.notEqual);
                }
            };
            assert.deepEqual = function deepEqual(actual, expected, message) {
                if (!_deepEqual(actual, expected, false)) {
                    fail(actual, expected, message, "deepEqual", assert.deepEqual);
                }
            };
            assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
                if (!_deepEqual(actual, expected, true)) {
                    fail(actual, expected, message, "deepStrictEqual", assert.deepStrictEqual);
                }
            };
            function _deepEqual(actual, expected, strict, memos) {
                if (actual === expected) {
                    return true;
                } else if (isBuffer(actual) && isBuffer(expected)) {
                    return compare(actual, expected) === 0;
                } else if (util.isDate(actual) && util.isDate(expected)) {
                    return actual.getTime() === expected.getTime();
                } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
                    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
                } else if ((actual === null || typeof actual !== "object") && (expected === null || typeof expected !== "object")) {
                    return strict ? actual === expected : actual == expected;
                } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
                    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
                } else if (isBuffer(actual) !== isBuffer(expected)) {
                    return false;
                } else {
                    memos = memos || {
                        actual: [],
                        expected: []
                    };
                    var actualIndex = memos.actual.indexOf(actual);
                    if (actualIndex !== -1) {
                        if (actualIndex === memos.expected.indexOf(expected)) {
                            return true;
                        }
                    }
                    memos.actual.push(actual);
                    memos.expected.push(expected);
                    return objEquiv(actual, expected, strict, memos);
                }
            }
            function isArguments(object) {
                return Object.prototype.toString.call(object) == "[object Arguments]";
            }
            function objEquiv(a, b, strict, actualVisitedObjects) {
                if (a === null || a === undefined || b === null || b === undefined) return false;
                if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
                if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
                var aIsArgs = isArguments(a);
                var bIsArgs = isArguments(b);
                if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
                if (aIsArgs) {
                    a = pSlice.call(a);
                    b = pSlice.call(b);
                    return _deepEqual(a, b, strict);
                }
                var ka = objectKeys(a);
                var kb = objectKeys(b);
                var key, i;
                if (ka.length !== kb.length) return false;
                ka.sort();
                kb.sort();
                for (i = ka.length - 1; i >= 0; i--) {
                    if (ka[i] !== kb[i]) return false;
                }
                for (i = ka.length - 1; i >= 0; i--) {
                    key = ka[i];
                    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
                }
                return true;
            }
            assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
                if (_deepEqual(actual, expected, false)) {
                    fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual);
                }
            };
            assert.notDeepStrictEqual = notDeepStrictEqual;
            function notDeepStrictEqual(actual, expected, message) {
                if (_deepEqual(actual, expected, true)) {
                    fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual);
                }
            }
            assert.strictEqual = function strictEqual(actual, expected, message) {
                if (actual !== expected) {
                    fail(actual, expected, message, "===", assert.strictEqual);
                }
            };
            assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
                if (actual === expected) {
                    fail(actual, expected, message, "!==", assert.notStrictEqual);
                }
            };
            function expectedException(actual, expected) {
                if (!actual || !expected) {
                    return false;
                }
                if (Object.prototype.toString.call(expected) == "[object RegExp]") {
                    return expected.test(actual);
                }
                try {
                    if (actual instanceof expected) {
                        return true;
                    }
                } catch (e) {}
                if (Error.isPrototypeOf(expected)) {
                    return false;
                }
                return expected.call({}, actual) === true;
            }
            function _tryBlock(block) {
                var error;
                try {
                    block();
                } catch (e) {
                    error = e;
                }
                return error;
            }
            function _throws(shouldThrow, block, expected, message) {
                var actual;
                if (typeof block !== "function") {
                    throw new TypeError('"block" argument must be a function');
                }
                if (typeof expected === "string") {
                    message = expected;
                    expected = null;
                }
                actual = _tryBlock(block);
                message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
                if (shouldThrow && !actual) {
                    fail(actual, expected, "Missing expected exception" + message);
                }
                var userProvidedMessage = typeof message === "string";
                var isUnwantedException = !shouldThrow && util.isError(actual);
                var isUnexpectedException = !shouldThrow && actual && !expected;
                if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
                    fail(actual, expected, "Got unwanted exception" + message);
                }
                if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
                    throw actual;
                }
            }
            assert.throws = function(block, error, message) {
                _throws(true, block, error, message);
            };
            assert.doesNotThrow = function(block, error, message) {
                _throws(false, block, error, message);
            };
            assert.ifError = function(err) {
                if (err) throw err;
            };
            var objectKeys = Object.keys || function(obj) {
                var keys = [];
                for (var key in obj) {
                    if (hasOwn.call(obj, key)) keys.push(key);
                }
                return keys;
            };
        }).call(exports, __webpack_require__("../node_modules/webpack/buildin/global.js"));
    },
    "../node_modules/beaver-logger/dist/beaver-logger.js": function(module, exports, __webpack_require__) {
        (function(console, module) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            (function webpackUniversalModuleDefinition(root, factory) {
                if ((false ? "undefined" : _typeof(exports)) === "object" && (false ? "undefined" : _typeof(module)) === "object") module.exports = factory(); else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
                __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") exports["$logger"] = factory(); else root["$logger"] = factory();
            })(undefined, function() {
                return function(modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                        if (installedModules[moduleId]) return installedModules[moduleId].exports;
                        var module = installedModules[moduleId] = {
                            exports: {},
                            id: moduleId,
                            loaded: false
                        };
                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        module.loaded = true;
                        return module.exports;
                    }
                    __webpack_require__.m = modules;
                    __webpack_require__.c = installedModules;
                    __webpack_require__.p = "";
                    return __webpack_require__(0);
                }([ function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _interface = __webpack_require__(1);
                    Object.keys(_interface).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _interface[key];
                            }
                        });
                    });
                    var INTERFACE = _interopRequireWildcard(_interface);
                    function _interopRequireWildcard(obj) {
                        if (obj && obj.__esModule) {
                            return obj;
                        } else {
                            var newObj = {};
                            if (obj != null) {
                                for (var key in obj) {
                                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                                }
                            }
                            newObj["default"] = obj;
                            return newObj;
                        }
                    }
                    exports["default"] = INTERFACE;
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _logger = __webpack_require__(2);
                    Object.keys(_logger).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _logger[key];
                            }
                        });
                    });
                    var _init = __webpack_require__(11);
                    Object.keys(_init).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _init[key];
                            }
                        });
                    });
                    var _transitions = __webpack_require__(13);
                    Object.keys(_transitions).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _transitions[key];
                            }
                        });
                    });
                    var _builders = __webpack_require__(9);
                    Object.keys(_builders).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _builders[key];
                            }
                        });
                    });
                    var _config = __webpack_require__(10);
                    Object.keys(_config).forEach(function(key) {
                        if (key === "default" || key === "__esModule") return;
                        Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: function get() {
                                return _config[key];
                            }
                        });
                    });
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.track = exports.flush = exports.tracking = exports.buffer = undefined;
                    exports.getTransport = getTransport;
                    exports.setTransport = setTransport;
                    exports.print = print;
                    exports.immediateFlush = immediateFlush;
                    exports.log = log;
                    exports.prefix = prefix;
                    exports.debug = debug;
                    exports.info = info;
                    exports.warn = warn;
                    exports.error = error;
                    var _util = __webpack_require__(3);
                    var _builders = __webpack_require__(9);
                    var _config = __webpack_require__(10);
                    var buffer = exports.buffer = [];
                    var tracking = exports.tracking = [];
                    var transport = function transport(headers, data, options) {
                        return (0, _util.ajax)("post", _config.config.uri, headers, data, options);
                    };
                    function getTransport() {
                        return transport;
                    }
                    function setTransport(newTransport) {
                        transport = newTransport;
                    }
                    var loaded = false;
                    setTimeout(function() {
                        loaded = true;
                    }, 1);
                    function print(level, event, payload) {
                        if (typeof window === "undefined" || !window.console || !window.console.log) {
                            return;
                        }
                        if (!loaded) {
                            return setTimeout(function() {
                                return print(level, event, payload);
                            }, 1);
                        }
                        var logLevel = _config.config.logLevel;
                        if (window.LOG_LEVEL) {
                            logLevel = window.LOG_LEVEL;
                        }
                        if (_config.logLevels.indexOf(level) > _config.logLevels.indexOf(logLevel)) {
                            return;
                        }
                        payload = payload || {};
                        var args = [ event ];
                        if ((0, _util.isIE)()) {
                            payload = JSON.stringify(payload);
                        }
                        args.push(payload);
                        if (payload.error || payload.warning) {
                            args.push("\n\n", payload.error || payload.warning);
                        }
                        try {
                            if (window.console[level] && window.console[level].apply) {
                                window.console[level].apply(window.console, args);
                            } else if (window.console.log && window.console.log.apply) {
                                window.console.log.apply(window.console, args);
                            }
                        } catch (err) {}
                    }
                    function immediateFlush() {
                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$fireAndForget = _ref.fireAndForget, fireAndForget = _ref$fireAndForget === undefined ? false : _ref$fireAndForget;
                        if (typeof window === "undefined") {
                            return;
                        }
                        if (!_config.config.uri) {
                            return;
                        }
                        var hasBuffer = buffer.length;
                        var hasTracking = tracking.length;
                        if (!hasBuffer && !hasTracking) {
                            return;
                        }
                        var meta = {};
                        for (var _iterator = _builders.metaBuilders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref2;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref2 = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref2 = _i.value;
                            }
                            var builder = _ref2;
                            try {
                                (0, _util.extend)(meta, builder(meta), false);
                            } catch (err) {
                                console.error("Error in custom meta builder:", err.stack || err.toString());
                            }
                        }
                        var headers = {};
                        for (var _iterator2 = _builders.headerBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref3;
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref3 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref3 = _i2.value;
                            }
                            var _builder = _ref3;
                            try {
                                (0, _util.extend)(headers, _builder(headers), false);
                            } catch (err) {
                                console.error("Error in custom header builder:", err.stack || err.toString());
                            }
                        }
                        var events = buffer;
                        var req = transport(headers, {
                            events: events,
                            meta: meta,
                            tracking: tracking
                        }, {
                            fireAndForget: fireAndForget
                        });
                        exports.buffer = buffer = [];
                        exports.tracking = tracking = [];
                        return req;
                    }
                    var _flush = (0, _util.promiseDebounce)(immediateFlush, _config.config.debounceInterval);
                    exports.flush = _flush;
                    function enqueue(level, event, payload) {
                        buffer.push({
                            level: level,
                            event: event,
                            payload: payload
                        });
                        if (_config.config.autoLog.indexOf(level) > -1) {
                            _flush();
                        }
                    }
                    function log(level, event, payload) {
                        if (typeof window === "undefined") {
                            return;
                        }
                        if (_config.config.prefix) {
                            event = _config.config.prefix + "_" + event;
                        }
                        payload = payload || {};
                        if (typeof payload === "string") {
                            payload = {
                                message: payload
                            };
                        } else if (payload instanceof Error) {
                            payload = {
                                error: payload.stack || payload.toString()
                            };
                        }
                        try {
                            JSON.stringify(payload);
                        } catch (err) {
                            return;
                        }
                        payload.timestamp = Date.now();
                        for (var _iterator3 = _builders.payloadBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                            var _ref4;
                            if (_isArray3) {
                                if (_i3 >= _iterator3.length) break;
                                _ref4 = _iterator3[_i3++];
                            } else {
                                _i3 = _iterator3.next();
                                if (_i3.done) break;
                                _ref4 = _i3.value;
                            }
                            var builder = _ref4;
                            try {
                                (0, _util.extend)(payload, builder(payload), false);
                            } catch (err) {
                                console.error("Error in custom payload builder:", err.stack || err.toString());
                            }
                        }
                        if (!_config.config.silent) {
                            print(level, event, payload);
                        }
                        if (buffer.length === _config.config.sizeLimit) {
                            enqueue("info", "logger_max_buffer_length");
                        } else if (buffer.length < _config.config.sizeLimit) {
                            enqueue(level, event, payload);
                        }
                    }
                    function prefix(name) {
                        return {
                            debug: function debug(event, payload) {
                                return log("debug", name + "_" + event, payload);
                            },
                            info: function info(event, payload) {
                                return log("info", name + "_" + event, payload);
                            },
                            warn: function warn(event, payload) {
                                return log("warn", name + "_" + event, payload);
                            },
                            error: function error(event, payload) {
                                return log("error", name + "_" + event, payload);
                            },
                            track: function track(payload) {
                                return _track(payload);
                            },
                            flush: function flush() {
                                return _flush();
                            }
                        };
                    }
                    function debug(event, payload) {
                        return log("debug", event, payload);
                    }
                    function info(event, payload) {
                        return log("info", event, payload);
                    }
                    function warn(event, payload) {
                        return log("warn", event, payload);
                    }
                    function error(event, payload) {
                        return log("error", event, payload);
                    }
                    function _track(payload) {
                        if (typeof window === "undefined") {
                            return;
                        }
                        if (payload) {
                            try {
                                JSON.stringify(payload);
                            } catch (err) {
                                return;
                            }
                            for (var _iterator4 = _builders.trackingBuilders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                                var _ref5;
                                if (_isArray4) {
                                    if (_i4 >= _iterator4.length) break;
                                    _ref5 = _iterator4[_i4++];
                                } else {
                                    _i4 = _iterator4.next();
                                    if (_i4.done) break;
                                    _ref5 = _i4.value;
                                }
                                var builder = _ref5;
                                try {
                                    (0, _util.extend)(payload, builder(payload), false);
                                } catch (err) {
                                    console.error("Error in custom tracking builder:", err.stack || err.toString());
                                }
                            }
                            print("debug", "tracking", payload);
                            tracking.push(payload);
                        }
                    }
                    exports.track = _track;
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.extend = extend;
                    exports.isSameProtocol = isSameProtocol;
                    exports.isSameDomain = isSameDomain;
                    exports.ajax = ajax;
                    exports.promiseDebounce = promiseDebounce;
                    exports.onWindowReady = onWindowReady;
                    exports.safeInterval = safeInterval;
                    exports.uniqueID = uniqueID;
                    exports.isIE = isIE;
                    var _src = __webpack_require__(4);
                    function extend(dest, src) {
                        var over = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                        dest = dest || {};
                        src = src || {};
                        for (var i in src) {
                            if (src.hasOwnProperty(i)) {
                                if (over || !dest.hasOwnProperty(i)) {
                                    dest[i] = src[i];
                                }
                            }
                        }
                        return dest;
                    }
                    function isSameProtocol(url) {
                        return window.location.protocol === url.split("/")[0];
                    }
                    function isSameDomain(url) {
                        var match = url.match(/https?:\/\/[^\/]+/);
                        if (!match) {
                            return true;
                        }
                        return match[0] === window.location.protocol + "//" + window.location.host;
                    }
                    function ajax(method, url) {
                        var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                        var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                        var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {}, _ref$fireAndForget = _ref.fireAndForget, fireAndForget = _ref$fireAndForget === undefined ? false : _ref$fireAndForget;
                        return new _src.ZalgoPromise(function(resolve) {
                            var XRequest = window.XMLHttpRequest || window.ActiveXObject;
                            if (window.XDomainRequest && !isSameDomain(url)) {
                                if (!isSameProtocol(url)) {
                                    return resolve();
                                }
                                XRequest = window.XDomainRequest;
                            }
                            var req = new XRequest("MSXML2.XMLHTTP.3.0");
                            req.open(method.toUpperCase(), url, true);
                            if (typeof req.setRequestHeader === "function") {
                                req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                                req.setRequestHeader("Content-type", "application/json");
                                for (var headerName in headers) {
                                    if (headers.hasOwnProperty(headerName)) {
                                        req.setRequestHeader(headerName, headers[headerName]);
                                    }
                                }
                            }
                            if (fireAndForget) {
                                resolve();
                            } else {
                                req.onreadystatechange = function() {
                                    if (req.readyState > 3) {
                                        resolve();
                                    }
                                };
                            }
                            req.send(JSON.stringify(data).replace(/&/g, "%26"));
                        });
                    }
                    function promiseDebounce(method, interval) {
                        var debounce = {};
                        return function() {
                            var args = arguments;
                            if (debounce.timeout) {
                                clearTimeout(debounce.timeout);
                                delete debounce.timeout;
                            }
                            debounce.timeout = setTimeout(function() {
                                var resolver = debounce.resolver;
                                var rejector = debounce.rejector;
                                delete debounce.promise;
                                delete debounce.resolver;
                                delete debounce.rejector;
                                delete debounce.timeout;
                                return _src.ZalgoPromise.resolve().then(function() {
                                    return method.apply(null, args);
                                }).then(resolver, rejector);
                            }, interval);
                            debounce.promise = debounce.promise || new _src.ZalgoPromise(function(resolver, rejector) {
                                debounce.resolver = resolver;
                                debounce.rejector = rejector;
                            });
                            return debounce.promise;
                        };
                    }
                    function onWindowReady() {
                        return new _src.ZalgoPromise(function(resolve) {
                            if (typeof document !== "undefined" && document.readyState === "complete") {
                                resolve();
                            }
                            window.addEventListener("load", resolve);
                        });
                    }
                    function safeInterval(method, time) {
                        var timeout = void 0;
                        function loop() {
                            timeout = setTimeout(function() {
                                method();
                                loop();
                            }, time);
                        }
                        loop();
                        return {
                            cancel: function cancel() {
                                clearTimeout(timeout);
                            }
                        };
                    }
                    function uniqueID() {
                        var chars = "0123456789abcdef";
                        return "xxxxxxxxxx".replace(/./g, function() {
                            return chars.charAt(Math.floor(Math.random() * chars.length));
                        });
                    }
                    function isIE() {
                        return Boolean(window.document.documentMode);
                    }
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _promise = __webpack_require__(5);
                    Object.defineProperty(exports, "ZalgoPromise", {
                        enumerable: true,
                        get: function get() {
                            return _promise.ZalgoPromise;
                        }
                    });
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.ZalgoPromise = undefined;
                    var _createClass = function() {
                        function defineProperties(target, props) {
                            for (var i = 0; i < props.length; i++) {
                                var descriptor = props[i];
                                descriptor.enumerable = descriptor.enumerable || false;
                                descriptor.configurable = true;
                                if ("value" in descriptor) descriptor.writable = true;
                                Object.defineProperty(target, descriptor.key, descriptor);
                            }
                        }
                        return function(Constructor, protoProps, staticProps) {
                            if (protoProps) defineProperties(Constructor.prototype, protoProps);
                            if (staticProps) defineProperties(Constructor, staticProps);
                            return Constructor;
                        };
                    }();
                    var _utils = __webpack_require__(6);
                    var _exceptions = __webpack_require__(7);
                    var _global = __webpack_require__(8);
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError("Cannot call a class as a function");
                        }
                    }
                    var ZalgoPromise = function() {
                        function ZalgoPromise(handler) {
                            var _this = this;
                            _classCallCheck(this, ZalgoPromise);
                            this.resolved = false;
                            this.rejected = false;
                            this.errorHandled = false;
                            this.handlers = [];
                            if (handler) {
                                var _result = void 0;
                                var _error = void 0;
                                var resolved = false;
                                var rejected = false;
                                var isAsync = false;
                                try {
                                    handler(function(res) {
                                        if (isAsync) {
                                            _this.resolve(res);
                                        } else {
                                            resolved = true;
                                            _result = res;
                                        }
                                    }, function(err) {
                                        if (isAsync) {
                                            _this.reject(err);
                                        } else {
                                            rejected = true;
                                            _error = err;
                                        }
                                    });
                                } catch (err) {
                                    this.reject(err);
                                    return;
                                }
                                isAsync = true;
                                if (resolved) {
                                    this.resolve(_result);
                                } else if (rejected) {
                                    this.reject(_error);
                                }
                            }
                        }
                        _createClass(ZalgoPromise, [ {
                            key: "resolve",
                            value: function resolve(result) {
                                if (this.resolved || this.rejected) {
                                    return this;
                                }
                                if ((0, _utils.isPromise)(result)) {
                                    throw new Error("Can not resolve promise with another promise");
                                }
                                this.resolved = true;
                                this.value = result;
                                this.dispatch();
                                return this;
                            }
                        }, {
                            key: "reject",
                            value: function reject(error) {
                                var _this2 = this;
                                if (this.resolved || this.rejected) {
                                    return this;
                                }
                                if ((0, _utils.isPromise)(error)) {
                                    throw new Error("Can not reject promise with another promise");
                                }
                                if (!error) {
                                    var _err = error && typeof error.toString === "function" ? error.toString() : Object.prototype.toString.call(error);
                                    error = new Error("Expected reject to be called with Error, got " + _err);
                                }
                                this.rejected = true;
                                this.error = error;
                                if (!this.errorHandled) {
                                    setTimeout(function() {
                                        if (!_this2.errorHandled) {
                                            (0, _exceptions.dispatchPossiblyUnhandledError)(error);
                                        }
                                    }, 1);
                                }
                                this.dispatch();
                                return this;
                            }
                        }, {
                            key: "asyncReject",
                            value: function asyncReject(error) {
                                this.errorHandled = true;
                                this.reject(error);
                            }
                        }, {
                            key: "dispatch",
                            value: function dispatch() {
                                var _this3 = this;
                                var dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                                if (dispatching) {
                                    return;
                                }
                                if (!resolved && !rejected) {
                                    return;
                                }
                                this.dispatching = true;
                                (0, _global.getGlobal)().activeCount += 1;
                                var _loop = function _loop(i) {
                                    var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                                    var result = void 0;
                                    if (resolved) {
                                        try {
                                            result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                                        } catch (err) {
                                            promise.reject(err);
                                            return "continue";
                                        }
                                    } else if (rejected) {
                                        if (!onError) {
                                            promise.reject(_this3.error);
                                            return "continue";
                                        }
                                        try {
                                            result = onError(_this3.error);
                                        } catch (err) {
                                            promise.reject(err);
                                            return "continue";
                                        }
                                    }
                                    if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                        if (result.resolved) {
                                            promise.resolve(result.value);
                                        } else {
                                            promise.reject(result.error);
                                        }
                                        result.errorHandled = true;
                                    } else if ((0, _utils.isPromise)(result)) {
                                        if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                            if (result.resolved) {
                                                promise.resolve(result.value);
                                            } else {
                                                promise.reject(result.error);
                                            }
                                        } else {
                                            result.then(function(res) {
                                                promise.resolve(res);
                                            }, function(err) {
                                                promise.reject(err);
                                            });
                                        }
                                    } else {
                                        promise.resolve(result);
                                    }
                                };
                                for (var i = 0; i < handlers.length; i++) {
                                    var _ret = _loop(i);
                                    if (_ret === "continue") continue;
                                }
                                handlers.length = 0;
                                this.dispatching = false;
                                (0, _global.getGlobal)().activeCount -= 1;
                                if ((0, _global.getGlobal)().activeCount === 0) {
                                    ZalgoPromise.flushQueue();
                                }
                            }
                        }, {
                            key: "then",
                            value: function then(onSuccess, onError) {
                                if (onSuccess && typeof onSuccess !== "function" && !onSuccess.call) {
                                    throw new Error("Promise.then expected a function for success handler");
                                }
                                if (onError && typeof onError !== "function" && !onError.call) {
                                    throw new Error("Promise.then expected a function for error handler");
                                }
                                var promise = new ZalgoPromise();
                                this.handlers.push({
                                    promise: promise,
                                    onSuccess: onSuccess,
                                    onError: onError
                                });
                                this.errorHandled = true;
                                this.dispatch();
                                return promise;
                            }
                        }, {
                            key: "catch",
                            value: function _catch(onError) {
                                return this.then(undefined, onError);
                            }
                        }, {
                            key: "finally",
                            value: function _finally(handler) {
                                return this.then(function(result) {
                                    return ZalgoPromise["try"](handler).then(function() {
                                        return result;
                                    });
                                }, function(err) {
                                    return ZalgoPromise["try"](handler).then(function() {
                                        throw err;
                                    });
                                });
                            }
                        }, {
                            key: "timeout",
                            value: function timeout(time, err) {
                                var _this4 = this;
                                if (this.resolved || this.rejected) {
                                    return this;
                                }
                                var timeout = setTimeout(function() {
                                    if (_this4.resolved || _this4.rejected) {
                                        return;
                                    }
                                    _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                                }, time);
                                return this.then(function(result) {
                                    clearTimeout(timeout);
                                    return result;
                                });
                            }
                        }, {
                            key: "toPromise",
                            value: function toPromise() {
                                if (typeof Promise === "undefined") {
                                    throw new TypeError("Could not find Promise");
                                }
                                return Promise.resolve(this);
                            }
                        } ], [ {
                            key: "resolve",
                            value: function resolve(value) {
                                if (value instanceof ZalgoPromise) {
                                    return value;
                                }
                                if ((0, _utils.isPromise)(value)) {
                                    return new ZalgoPromise(function(resolve, reject) {
                                        return value.then(resolve, reject);
                                    });
                                }
                                return new ZalgoPromise().resolve(value);
                            }
                        }, {
                            key: "reject",
                            value: function reject(error) {
                                return new ZalgoPromise().reject(error);
                            }
                        }, {
                            key: "all",
                            value: function all(promises) {
                                var promise = new ZalgoPromise();
                                var count = promises.length;
                                var results = [];
                                if (!count) {
                                    promise.resolve(results);
                                    return promise;
                                }
                                var _loop2 = function _loop2(i) {
                                    var prom = promises[i];
                                    if (prom instanceof ZalgoPromise) {
                                        if (prom.resolved) {
                                            results[i] = prom.value;
                                            count -= 1;
                                            return "continue";
                                        }
                                    } else if (!(0, _utils.isPromise)(prom)) {
                                        results[i] = prom;
                                        count -= 1;
                                        return "continue";
                                    }
                                    ZalgoPromise.resolve(prom).then(function(result) {
                                        results[i] = result;
                                        count -= 1;
                                        if (count === 0) {
                                            promise.resolve(results);
                                        }
                                    }, function(err) {
                                        promise.reject(err);
                                    });
                                };
                                for (var i = 0; i < promises.length; i++) {
                                    var _ret2 = _loop2(i);
                                    if (_ret2 === "continue") continue;
                                }
                                if (count === 0) {
                                    promise.resolve(results);
                                }
                                return promise;
                            }
                        }, {
                            key: "hash",
                            value: function hash(promises) {
                                var result = {};
                                return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                                    return ZalgoPromise.resolve(promises[key]).then(function(value) {
                                        result[key] = value;
                                    });
                                })).then(function() {
                                    return result;
                                });
                            }
                        }, {
                            key: "map",
                            value: function map(items, method) {
                                return ZalgoPromise.all(items.map(method));
                            }
                        }, {
                            key: "onPossiblyUnhandledException",
                            value: function onPossiblyUnhandledException(handler) {
                                return (0, _exceptions.onPossiblyUnhandledException)(handler);
                            }
                        }, {
                            key: "try",
                            value: function _try(method, context, args) {
                                var result = void 0;
                                try {
                                    result = method.apply(context, args || []);
                                } catch (err) {
                                    return ZalgoPromise.reject(err);
                                }
                                return ZalgoPromise.resolve(result);
                            }
                        }, {
                            key: "delay",
                            value: function delay(_delay) {
                                return new ZalgoPromise(function(resolve) {
                                    setTimeout(resolve, _delay);
                                });
                            }
                        }, {
                            key: "isPromise",
                            value: function isPromise(value) {
                                if (value && value instanceof ZalgoPromise) {
                                    return true;
                                }
                                return (0, _utils.isPromise)(value);
                            }
                        }, {
                            key: "flush",
                            value: function flush() {
                                var promise = new ZalgoPromise();
                                (0, _global.getGlobal)().flushPromises.push(promise);
                                if ((0, _global.getGlobal)().activeCount === 0) {
                                    ZalgoPromise.flushQueue();
                                }
                                return promise;
                            }
                        }, {
                            key: "flushQueue",
                            value: function flushQueue() {
                                var promisesToFlush = (0, _global.getGlobal)().flushPromises;
                                (0, _global.getGlobal)().flushPromises = [];
                                for (var _iterator = promisesToFlush, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                    var _ref;
                                    if (_isArray) {
                                        if (_i >= _iterator.length) break;
                                        _ref = _iterator[_i++];
                                    } else {
                                        _i = _iterator.next();
                                        if (_i.done) break;
                                        _ref = _i.value;
                                    }
                                    var _promise = _ref;
                                    _promise.resolve();
                                }
                            }
                        } ]);
                        return ZalgoPromise;
                    }();
                    exports.ZalgoPromise = ZalgoPromise;
                }, function(module, exports) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.isPromise = isPromise;
                    function isPromise(item) {
                        try {
                            if (!item) {
                                return false;
                            }
                            if (typeof Promise !== "undefined" && item instanceof Promise) {
                                return true;
                            }
                            if (typeof window !== "undefined" && window.Window && item instanceof window.Window) {
                                return false;
                            }
                            if (typeof window !== "undefined" && window.constructor && item instanceof window.constructor) {
                                return false;
                            }
                            var _toString = {}.toString;
                            if (_toString) {
                                var name = _toString.call(item);
                                if (name === "[object Window]" || name === "[object global]" || name === "[object DOMWindow]") {
                                    return false;
                                }
                            }
                            if (typeof item.then === "function") {
                                return true;
                            }
                        } catch (err) {
                            return false;
                        }
                        return false;
                    }
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.dispatchPossiblyUnhandledError = dispatchPossiblyUnhandledError;
                    exports.onPossiblyUnhandledException = onPossiblyUnhandledException;
                    var _global = __webpack_require__(8);
                    function dispatchPossiblyUnhandledError(err) {
                        if ((0, _global.getGlobal)().dispatchedErrors.indexOf(err) !== -1) {
                            return;
                        }
                        (0, _global.getGlobal)().dispatchedErrors.push(err);
                        setTimeout(function() {
                            throw err;
                        }, 1);
                        for (var j = 0; j < (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.length; j++) {
                            (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers[j](err);
                        }
                    }
                    function onPossiblyUnhandledException(handler) {
                        (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function cancel() {
                                (0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.splice((0, _global.getGlobal)().possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }
                }, function(module, exports) {
                    (function(global) {
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.getGlobal = getGlobal;
                        function getGlobal() {
                            var glob = void 0;
                            if (typeof window !== "undefined") {
                                glob = window;
                            } else if (typeof global !== "undefined") {
                                glob = global;
                            } else {
                                throw new TypeError("Can not find global");
                            }
                            var zalgoGlobal = glob.__zalgopromise__ = glob.__zalgopromise__ || {};
                            zalgoGlobal.flushPromises = zalgoGlobal.flushPromises || [];
                            zalgoGlobal.activeCount = zalgoGlobal.activeCount || 0;
                            zalgoGlobal.possiblyUnhandledPromiseHandlers = zalgoGlobal.possiblyUnhandledPromiseHandlers || [];
                            zalgoGlobal.dispatchedErrors = zalgoGlobal.dispatchedErrors || [];
                            return zalgoGlobal;
                        }
                    }).call(exports, function() {
                        return this;
                    }());
                }, function(module, exports) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.addPayloadBuilder = addPayloadBuilder;
                    exports.addMetaBuilder = addMetaBuilder;
                    exports.addTrackingBuilder = addTrackingBuilder;
                    exports.addHeaderBuilder = addHeaderBuilder;
                    var payloadBuilders = exports.payloadBuilders = [];
                    var metaBuilders = exports.metaBuilders = [];
                    var trackingBuilders = exports.trackingBuilders = [];
                    var headerBuilders = exports.headerBuilders = [];
                    function addPayloadBuilder(builder) {
                        payloadBuilders.push(builder);
                    }
                    function addMetaBuilder(builder) {
                        metaBuilders.push(builder);
                    }
                    function addTrackingBuilder(builder) {
                        trackingBuilders.push(builder);
                    }
                    function addHeaderBuilder(builder) {
                        headerBuilders.push(builder);
                    }
                }, function(module, exports) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var config = exports.config = {
                        uri: "",
                        prefix: "",
                        initial_state_name: "init",
                        flushInterval: 10 * 60 * 1e3,
                        debounceInterval: 10,
                        sizeLimit: 300,
                        silent: false,
                        heartbeat: true,
                        heartbeatConsoleLog: true,
                        heartbeatInterval: 5e3,
                        heartbeatTooBusy: false,
                        heartbeatTooBusyThreshold: 1e4,
                        logLevel: "warn",
                        autoLog: [ "warn", "error" ],
                        logUnload: true,
                        logPerformance: true
                    };
                    var logLevels = exports.logLevels = [ "error", "warn", "info", "debug" ];
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.init = init;
                    var _config = __webpack_require__(10);
                    var _util = __webpack_require__(3);
                    var _performance = __webpack_require__(12);
                    var _logger = __webpack_require__(2);
                    var initiated = false;
                    function init(conf) {
                        (0, _util.extend)(_config.config, conf || {});
                        if (initiated) {
                            return;
                        }
                        initiated = true;
                        if (_config.config.logPerformance) {
                            (0, _performance.initPerformance)();
                        }
                        if (_config.config.heartbeat) {
                            (0, _performance.initHeartBeat)();
                        }
                        if (_config.config.logUnload) {
                            window.addEventListener("beforeunload", function() {
                                (0, _logger.info)("window_beforeunload");
                                (0, _logger.immediateFlush)({
                                    fireAndForget: true
                                });
                            });
                            window.addEventListener("unload", function() {
                                (0, _logger.info)("window_unload");
                                (0, _logger.immediateFlush)({
                                    fireAndForget: true
                                });
                            });
                        }
                        if (_config.config.flushInterval) {
                            setInterval(_logger.flush, _config.config.flushInterval);
                        }
                        if (window.beaverLogQueue) {
                            window.beaverLogQueue.forEach(function(payload) {
                                (0, _logger.log)(payload.level, payload.event, payload);
                            });
                            delete window.beaverLogQueue;
                        }
                    }
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.reqTimer = exports.clientTimer = undefined;
                    exports.now = now;
                    exports.reqStartElapsed = reqStartElapsed;
                    exports.initHeartBeat = initHeartBeat;
                    exports.initPerformance = initPerformance;
                    var _config = __webpack_require__(10);
                    var _logger = __webpack_require__(2);
                    var _builders = __webpack_require__(9);
                    var _util = __webpack_require__(3);
                    var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;
                    function now() {
                        if (enablePerformance) {
                            return performance.now();
                        } else {
                            return Date.now();
                        }
                    }
                    function timer(startTime) {
                        startTime = startTime !== undefined ? startTime : now();
                        return {
                            startTime: startTime,
                            elapsed: function elapsed() {
                                return parseInt(now() - startTime, 10);
                            },
                            reset: function reset() {
                                startTime = now();
                            }
                        };
                    }
                    function reqStartElapsed() {
                        if (enablePerformance) {
                            var timing = window.performance.timing;
                            return parseInt(timing.connectEnd - timing.navigationStart, 10);
                        }
                    }
                    var clientTimer = exports.clientTimer = timer();
                    var reqTimer = exports.reqTimer = timer(reqStartElapsed());
                    function initHeartBeat() {
                        var heartBeatTimer = timer();
                        var heartbeatCount = 0;
                        (0, _util.safeInterval)(function() {
                            if (_config.config.heartbeatMaxThreshold && heartbeatCount > _config.config.heartbeatMaxThreshold) {
                                return;
                            }
                            heartbeatCount += 1;
                            var elapsed = heartBeatTimer.elapsed();
                            var lag = elapsed - _config.config.heartbeatInterval;
                            var heartbeatPayload = {
                                count: heartbeatCount,
                                elapsed: elapsed
                            };
                            if (_config.config.heartbeatTooBusy) {
                                heartbeatPayload.lag = lag;
                                if (lag >= _config.config.heartbeatTooBusyThreshold) {
                                    (0, _logger.info)("toobusy", heartbeatPayload, {
                                        noConsole: !_config.config.heartbeatConsoleLog
                                    });
                                }
                            }
                            (0, _logger.info)("heartbeat", heartbeatPayload, {
                                noConsole: !_config.config.heartbeatConsoleLog
                            });
                        }, _config.config.heartbeatInterval);
                    }
                    function initPerformance() {
                        if (!enablePerformance) {
                            return (0, _logger.info)("no_performance_data");
                        }
                        (0, _builders.addPayloadBuilder)(function() {
                            var payload = {};
                            payload.client_elapsed = clientTimer.elapsed();
                            if (enablePerformance) {
                                payload.req_elapsed = reqTimer.elapsed();
                            }
                            return payload;
                        });
                        (0, _util.onWindowReady)().then(function() {
                            var keys = [ "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart" ];
                            var timing = {};
                            keys.forEach(function(key) {
                                timing[key] = parseInt(window.performance.timing[key], 10) || 0;
                            });
                            var offset = timing.connectEnd - timing.navigationStart;
                            if (timing.connectEnd) {
                                Object.keys(timing).forEach(function(name) {
                                    var time = timing[name];
                                    if (time) {
                                        (0, _logger.info)("timing_" + name, {
                                            client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                                            req_elapsed: parseInt(time - timing.connectEnd, 10)
                                        });
                                    }
                                });
                            }
                            (0, _logger.info)("timing", timing);
                            (0, _logger.info)("memory", window.performance.memory);
                            (0, _logger.info)("navigation", window.performance.navigation);
                            if (window.performance.getEntries) {
                                window.performance.getEntries().forEach(function(resource) {
                                    if ([ "link", "script", "img", "css" ].indexOf(resource.initiatorType) > -1) {
                                        (0, _logger.info)(resource.initiatorType, resource);
                                    }
                                });
                            }
                        });
                    }
                }, function(module, exports, __webpack_require__) {
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.startTransition = startTransition;
                    exports.endTransition = endTransition;
                    exports.transition = transition;
                    var _performance = __webpack_require__(12);
                    var _logger = __webpack_require__(2);
                    var _builders = __webpack_require__(9);
                    var _util = __webpack_require__(3);
                    var _config = __webpack_require__(10);
                    var windowID = (0, _util.uniqueID)();
                    var pageID = (0, _util.uniqueID)();
                    var currentState = _config.config.initial_state_name;
                    var startTime = void 0;
                    function startTransition() {
                        startTime = (0, _performance.now)();
                    }
                    function endTransition(toState) {
                        startTime = startTime || (0, _performance.reqStartElapsed)();
                        var currentTime = (0, _performance.now)();
                        var elapsedTime = void 0;
                        if (startTime !== undefined) {
                            elapsedTime = parseInt(currentTime - startTime, 0);
                        }
                        var transitionName = "transition_" + currentState + "_to_" + toState;
                        (0, _logger.info)(transitionName, {
                            duration: elapsedTime
                        });
                        (0, _logger.track)({
                            transition: transitionName,
                            transition_time: elapsedTime
                        });
                        (0, _logger.immediateFlush)();
                        startTime = currentTime;
                        currentState = toState;
                        pageID = (0, _util.uniqueID)();
                    }
                    function transition(toState) {
                        startTransition();
                        endTransition(toState);
                    }
                    (0, _builders.addPayloadBuilder)(function() {
                        return {
                            windowID: windowID,
                            pageID: pageID
                        };
                    });
                    (0, _builders.addMetaBuilder)(function() {
                        return {
                            state: "ui_" + currentState
                        };
                    });
                } ]);
            });
        }).call(exports, __webpack_require__("../node_modules/console-browserify/index.js"), __webpack_require__("../node_modules/webpack/buildin/module.js")(module));
    },
    "../node_modules/beaver-logger/index.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("../node_modules/beaver-logger/dist/beaver-logger.js");
        module.exports.default = module.exports;
    },
    "../node_modules/console-browserify/index.js": function(module, exports, __webpack_require__) {
        (function(global) {
            var util = __webpack_require__("../node_modules/util/util.js");
            var assert = __webpack_require__("../node_modules/assert/assert.js");
            var now = __webpack_require__("../node_modules/date-now/index.js");
            var slice = Array.prototype.slice;
            var console;
            var times = {};
            if (typeof global !== "undefined" && global.console) {
                console = global.console;
            } else if (typeof window !== "undefined" && window.console) {
                console = window.console;
            } else {
                console = {};
            }
            var functions = [ [ log, "log" ], [ info, "info" ], [ warn, "warn" ], [ error, "error" ], [ time, "time" ], [ timeEnd, "timeEnd" ], [ trace, "trace" ], [ dir, "dir" ], [ consoleAssert, "assert" ] ];
            for (var i = 0; i < functions.length; i++) {
                var tuple = functions[i];
                var f = tuple[0];
                var name = tuple[1];
                if (!console[name]) {
                    console[name] = f;
                }
            }
            module.exports = console;
            function log() {}
            function info() {
                console.log.apply(console, arguments);
            }
            function warn() {
                console.log.apply(console, arguments);
            }
            function error() {
                console.warn.apply(console, arguments);
            }
            function time(label) {
                times[label] = now();
            }
            function timeEnd(label) {
                var time = times[label];
                if (!time) {
                    throw new Error("No such label: " + label);
                }
                var duration = now() - time;
                console.log(label + ": " + duration + "ms");
            }
            function trace() {
                var err = new Error();
                err.name = "Trace";
                err.message = util.format.apply(null, arguments);
                console.error(err.stack);
            }
            function dir(object) {
                console.log(util.inspect(object) + "\n");
            }
            function consoleAssert(expression) {
                if (!expression) {
                    var arr = slice.call(arguments, 1);
                    assert.ok(false, util.format.apply(null, arr));
                }
            }
        }).call(exports, __webpack_require__("../node_modules/webpack/buildin/global.js"));
    },
    "../node_modules/date-now/index.js": function(module, exports) {
        module.exports = now;
        function now() {
            return new Date().getTime();
        }
    },
    "../node_modules/inherits/inherits_browser.js": function(module, exports) {
        if (typeof Object.create === "function") {
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            };
        } else {
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function() {};
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
            };
        }
    },
    "../node_modules/paypal-sdk-constants/dist/paypal-sdk-constants.js": function(module, exports, __webpack_require__) {
        (function(module) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            !function(root, factory) {
                "object" == (false ? "undefined" : _typeof(exports)) && "object" == (false ? "undefined" : _typeof(module)) ? module.exports = factory() : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
                __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.ppsdkconstants = factory() : root.ppsdkconstants = factory();
            }("undefined" != typeof self ? self : undefined, function() {
                return function(modules) {
                    var installedModules = {};
                    function __webpack_require__(moduleId) {
                        if (installedModules[moduleId]) return installedModules[moduleId].exports;
                        var module = installedModules[moduleId] = {
                            i: moduleId,
                            l: !1,
                            exports: {}
                        };
                        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                        module.l = !0;
                        return module.exports;
                    }
                    __webpack_require__.m = modules;
                    __webpack_require__.c = installedModules;
                    __webpack_require__.d = function(exports, name, getter) {
                        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                            configurable: !1,
                            enumerable: !0,
                            get: getter
                        });
                    };
                    __webpack_require__.n = function(module) {
                        var getter = module && module.__esModule ? function() {
                            return module["default"];
                        } : function() {
                            return module;
                        };
                        __webpack_require__.d(getter, "a", getter);
                        return getter;
                    };
                    __webpack_require__.o = function(object, property) {
                        return Object.prototype.hasOwnProperty.call(object, property);
                    };
                    __webpack_require__.p = "";
                    return __webpack_require__(__webpack_require__.s = "./src/index.js");
                }({
                    "./src/index.js": function srcIndexJs(module, __webpack_exports__, __webpack_require__) {
                        Object.defineProperty(__webpack_exports__, "__esModule", {
                            value: !0
                        });
                        var _COUNTRY_LANGS, COUNTRY = {
                            AD: "AD",
                            AE: "AE",
                            AG: "AG",
                            AI: "AI",
                            AL: "AL",
                            AM: "AM",
                            AN: "AN",
                            AO: "AO",
                            AR: "AR",
                            AT: "AT",
                            AU: "AU",
                            AW: "AW",
                            AZ: "AZ",
                            BA: "BA",
                            BB: "BB",
                            BE: "BE",
                            BF: "BF",
                            BG: "BG",
                            BH: "BH",
                            BI: "BI",
                            BJ: "BJ",
                            BM: "BM",
                            BN: "BN",
                            BO: "BO",
                            BR: "BR",
                            BS: "BS",
                            BT: "BT",
                            BW: "BW",
                            BY: "BY",
                            BZ: "BZ",
                            CA: "CA",
                            CD: "CD",
                            CG: "CG",
                            CH: "CH",
                            CI: "CI",
                            CK: "CK",
                            CL: "CL",
                            CM: "CM",
                            CN: "CN",
                            CO: "CO",
                            CR: "CR",
                            CV: "CV",
                            CY: "CY",
                            CZ: "CZ",
                            DE: "DE",
                            DJ: "DJ",
                            DK: "DK",
                            DM: "DM",
                            DO: "DO",
                            DZ: "DZ",
                            EC: "EC",
                            EE: "EE",
                            EG: "EG",
                            ER: "ER",
                            ES: "ES",
                            ET: "ET",
                            FI: "FI",
                            FJ: "FJ",
                            FK: "FK",
                            FM: "FM",
                            FO: "FO",
                            FR: "FR",
                            GA: "GA",
                            GB: "GB",
                            GD: "GD",
                            GE: "GE",
                            GF: "GF",
                            GI: "GI",
                            GL: "GL",
                            GM: "GM",
                            GN: "GN",
                            GP: "GP",
                            GR: "GR",
                            GT: "GT",
                            GW: "GW",
                            GY: "GY",
                            HK: "HK",
                            HN: "HN",
                            HR: "HR",
                            HU: "HU",
                            ID: "ID",
                            IE: "IE",
                            IL: "IL",
                            IN: "IN",
                            IS: "IS",
                            IT: "IT",
                            JM: "JM",
                            JO: "JO",
                            JP: "JP",
                            KE: "KE",
                            KG: "KG",
                            KH: "KH",
                            KI: "KI",
                            KM: "KM",
                            KN: "KN",
                            KR: "KR",
                            KW: "KW",
                            KY: "KY",
                            KZ: "KZ",
                            LA: "LA",
                            LC: "LC",
                            LI: "LI",
                            LK: "LK",
                            LS: "LS",
                            LT: "LT",
                            LU: "LU",
                            LV: "LV",
                            MA: "MA",
                            MC: "MC",
                            MD: "MD",
                            ME: "ME",
                            MG: "MG",
                            MH: "MH",
                            MK: "MK",
                            ML: "ML",
                            MN: "MN",
                            MQ: "MQ",
                            MR: "MR",
                            MS: "MS",
                            MT: "MT",
                            MU: "MU",
                            MV: "MV",
                            MW: "MW",
                            MX: "MX",
                            MY: "MY",
                            MZ: "MZ",
                            NA: "NA",
                            NC: "NC",
                            NE: "NE",
                            NF: "NF",
                            NG: "NG",
                            NI: "NI",
                            NL: "NL",
                            NO: "NO",
                            NP: "NP",
                            NR: "NR",
                            NU: "NU",
                            NZ: "NZ",
                            OM: "OM",
                            PA: "PA",
                            PE: "PE",
                            PF: "PF",
                            PG: "PG",
                            PH: "PH",
                            PL: "PL",
                            PM: "PM",
                            PN: "PN",
                            PT: "PT",
                            PW: "PW",
                            PY: "PY",
                            QA: "QA",
                            RE: "RE",
                            RO: "RO",
                            RS: "RS",
                            RU: "RU",
                            RW: "RW",
                            SA: "SA",
                            SB: "SB",
                            SC: "SC",
                            SE: "SE",
                            SG: "SG",
                            SH: "SH",
                            SI: "SI",
                            SJ: "SJ",
                            SK: "SK",
                            SL: "SL",
                            SM: "SM",
                            SN: "SN",
                            SO: "SO",
                            SR: "SR",
                            ST: "ST",
                            SV: "SV",
                            SZ: "SZ",
                            TC: "TC",
                            TD: "TD",
                            TG: "TG",
                            TH: "TH",
                            TJ: "TJ",
                            TM: "TM",
                            TN: "TN",
                            TO: "TO",
                            TR: "TR",
                            TT: "TT",
                            TV: "TV",
                            TW: "TW",
                            TZ: "TZ",
                            UA: "UA",
                            UG: "UG",
                            US: "US",
                            UY: "UY",
                            VA: "VA",
                            VC: "VC",
                            VE: "VE",
                            VG: "VG",
                            VN: "VN",
                            VU: "VU",
                            WF: "WF",
                            WS: "WS",
                            YE: "YE",
                            YT: "YT",
                            ZA: "ZA",
                            ZM: "ZM",
                            ZW: "ZW"
                        }, LANG = {
                            AR: "ar",
                            CS: "cs",
                            DA: "da",
                            DE: "de",
                            EL: "el",
                            EN: "en",
                            ES: "es",
                            FI: "fi",
                            FR: "fr",
                            HE: "he",
                            HU: "hu",
                            ID: "id",
                            IT: "it",
                            JA: "ja",
                            KO: "ko",
                            NL: "nl",
                            NO: "no",
                            PL: "pl",
                            PT: "pt",
                            RU: "ru",
                            SK: "sk",
                            SV: "sv",
                            TH: "th",
                            TR: "tr",
                            ZH: "zh"
                        }, COUNTRY_LANGS = ((_COUNTRY_LANGS = {})[COUNTRY.AD] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.AE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ], _COUNTRY_LANGS[COUNTRY.AG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.AI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AL] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.AM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.AO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AR] = [ LANG.ES, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.AT] = [ LANG.DE, LANG.EN ], _COUNTRY_LANGS[COUNTRY.AU] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.AW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.AZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.BA] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.BB] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.BE] = [ LANG.EN, LANG.NL, LANG.FR ], _COUNTRY_LANGS[COUNTRY.BF] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.BG] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.BH] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.BI] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BJ] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.BM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BN] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.BO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BR] = [ LANG.PT, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.BS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BT] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.BW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.BY] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.BZ] = [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CA] = [ LANG.EN, LANG.FR ], 
                        _COUNTRY_LANGS[COUNTRY.CD] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.CH] = [ LANG.DE, LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.CI] = [ LANG.FR, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.CK] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CL] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.CM] = [ LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.CN] = [ LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.CO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CR] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.CV] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.CY] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.CZ] = [ LANG.CS, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DE] = [ LANG.DE, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.DJ] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DK] = [ LANG.DA, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.DM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.DO] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.DZ] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.EC] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.EE] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.EG] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.ER] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ES] = [ LANG.ES, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.ET] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.FI] = [ LANG.FI, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.FJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.FK] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.FM] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.FO] = [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.FR] = [ LANG.FR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.GA] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GB] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.GD] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GL] = [ LANG.DA, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GN] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GP] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GR] = [ LANG.EL, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GT] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.GW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.GY] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.HK] = [ LANG.EN, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.HN] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.HR] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.HU] = [ LANG.HU, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ID] = [ LANG.ID, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.IE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.IL] = [ LANG.HE, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.IN] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.IS] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.IT] = [ LANG.IT, LANG.EN ], _COUNTRY_LANGS[COUNTRY.JM] = [ LANG.EN, LANG.ES, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.JO] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.JP] = [ LANG.JA, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.KE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.KH] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.KI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.KM] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.KR] = [ LANG.KO, LANG.EN ], _COUNTRY_LANGS[COUNTRY.KW] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.KY] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.KZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.LA] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.LC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.LI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LK] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.LS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LT] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.LU] = [ LANG.EN, LANG.DE, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.LV] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MA] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MC] = [ LANG.FR, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.MD] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.ME] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.MG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MH] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MK] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.ML] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MN] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MQ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.MS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MT] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MV] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.MW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.MX] = [ LANG.ES, LANG.EN ], _COUNTRY_LANGS[COUNTRY.MY] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.MZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.NC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NE] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.NF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NG] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.NI] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NL] = [ LANG.NL, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.NO] = [ LANG.NO, LANG.EN ], _COUNTRY_LANGS[COUNTRY.NP] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.NR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.NU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.NZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.OM] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.PA] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PE] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.PF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.PH] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.PL] = [ LANG.PL, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.PM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.PN] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.PT] = [ LANG.PT, LANG.EN ], _COUNTRY_LANGS[COUNTRY.PW] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.PY] = [ LANG.ES, LANG.EN ], _COUNTRY_LANGS[COUNTRY.QA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH, LANG.AR ], 
                        _COUNTRY_LANGS[COUNTRY.RE] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.RO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.RS] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.RU] = [ LANG.RU, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.RW] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SA] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SB] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SC] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SE] = [ LANG.SV, LANG.EN ], _COUNTRY_LANGS[COUNTRY.SG] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.SH] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SI] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SK] = [ LANG.SK, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SL] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SN] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SO] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SR] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ST] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.SV] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.SZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.TC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TD] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.TG] = [ LANG.FR, LANG.EN, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TH] = [ LANG.TH, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.TJ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.TN] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TO] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.TR] = [ LANG.TR, LANG.EN ], _COUNTRY_LANGS[COUNTRY.TT] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.TV] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.TW] = [ LANG.ZH, LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.TZ] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.UA] = [ LANG.EN, LANG.RU, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.UG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.US] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.UY] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.VC] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VE] = [ LANG.ES, LANG.EN, LANG.FR, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.VG] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.VN] = [ LANG.EN ], 
                        _COUNTRY_LANGS[COUNTRY.VU] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.WF] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.WS] = [ LANG.EN ], _COUNTRY_LANGS[COUNTRY.YE] = [ LANG.AR, LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.YT] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ZA] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], 
                        _COUNTRY_LANGS[COUNTRY.ZM] = [ LANG.EN, LANG.FR, LANG.ES, LANG.ZH ], _COUNTRY_LANGS[COUNTRY.ZW] = [ LANG.EN ], 
                        _COUNTRY_LANGS), SDK_SETTINGS = {
                            CLIENT_TOKEN: "data-client-token",
                            PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
                            STAGE_HOST: "data-stage-host",
                            API_STAGE_HOST: "data-api-stage-host"
                        }, SDK_QUERY_KEYS = {
                            COMPONENTS: "components",
                            ENV: "env",
                            DEBUG: "debug",
                            CACHEBUST: "cachebust",
                            CLIENT_ID: "client-id",
                            MERCHANT_ID: "merchant-id",
                            LOCALE_COUNTRY: "locale-country",
                            LOCALE_LANG: "locale-lang",
                            ORDER_CURRENCY: "order-currency",
                            ORDER_INTENT: "order-intent",
                            ORDER_COMMIT: "order-commit",
                            ORDER_VAULT: "order-vault",
                            DISABLE_FUNDING: "disable-funding",
                            DISABLE_CARD: "disable-card"
                        }, COMPONENTS = {
                            BUTTONS: "buttons",
                            HOSTED_FIELDS: "hosted-fields"
                        }, DEBUG = {
                            TRUE: !0,
                            FALSE: !1
                        }, QUERY_BOOL = {
                            TRUE: "true",
                            FALSE: "false"
                        }, ENV = {
                            LOCAL: "local",
                            STAGE: "stage",
                            SANDBOX: "sandbox",
                            PRODUCTION: "production",
                            TEST: "test"
                        }, FPTI_KEY = {
                            FEED: "feed_name",
                            STATE: "state_name",
                            TRANSITION: "transition_name",
                            BUTTON_TYPE: "button_type",
                            SESSION_UID: "page_session_id",
                            BUTTON_SESSION_UID: "button_session_id",
                            TOKEN: "token",
                            CONTEXT_ID: "context_id",
                            CONTEXT_TYPE: "context_type",
                            REFERER: "referer_url",
                            PAY_ID: "pay_id",
                            SELLER_ID: "seller_id",
                            CLIENT_ID: "client_id",
                            DATA_SOURCE: "serverside_data_source",
                            BUTTON_SOURCE: "button_source",
                            ERROR_CODE: "ext_error_code",
                            ERROR_DESC: "ext_error_desc",
                            PAGE_LOAD_TIME: "page_load_time",
                            EXPERIMENT_NAME: "pxp_exp_id",
                            TREATMENT_NAME: "pxp_trtmnt_id",
                            TRANSITION_TIME: "transition_time",
                            FUNDING_LIST: "eligible_payment_methods",
                            FUNDING_COUNT: "eligible_payment_count",
                            CHOSEN_FUNDING: "selected_payment_method",
                            BUTTON_LAYOUT: "button_layout",
                            VERSION: "checkoutjs_version",
                            LOCALE: "locale",
                            BUYER_COUNTRY: "buyer_cntry",
                            INTEGRATION_IDENTIFIER: "integration_identifier",
                            PARTNER_ATTRIBUTION_ID: "bn_code",
                            SDK_NAME: "sdk_name",
                            SDK_VERSION: "sdk_version",
                            USER_AGENT: "user_agent",
                            USER_ACTION: "user_action",
                            CONTEXT_CORRID: "context_correlation_id"
                        }, FPTI_USER_ACTION = {
                            COMMIT: "commit",
                            CONTINUE: "continue"
                        }, FPTI_DATA_SOURCE = {
                            PAYMENTS_SDK: "payments_sdk"
                        }, FPTI_FEED = {
                            PAYMENTS_SDK: "payments_sdk"
                        }, FPTI_SDK_NAME = {
                            PAYMENTS_SDK: "payments_sdk"
                        }, INTENT = {
                            CAPTURE: "capture",
                            AUTHORIZE: "authorize",
                            ORDER: "order"
                        }, COMMIT = {
                            TRUE: !0,
                            FALSE: !1
                        }, VAULT = {
                            TRUE: !0,
                            FALSE: !1
                        }, CURRENCY = {
                            AUD: "AUD",
                            BRL: "BRL",
                            CAD: "CAD",
                            CZK: "CZK",
                            DKK: "DKK",
                            EUR: "EUR",
                            HKD: "HKD",
                            HUF: "HUF",
                            INR: "INR",
                            ILS: "ILS",
                            JPY: "JPY",
                            MYR: "MYR",
                            MXN: "MXN",
                            TWD: "TWD",
                            NZD: "NZD",
                            NOK: "NOK",
                            PHP: "PHP",
                            PLN: "PLN",
                            GBP: "GBP",
                            RUB: "RUB",
                            SGD: "SGD",
                            SEK: "SEK",
                            CHF: "CHF",
                            THB: "THB",
                            USD: "USD"
                        }, PLATFORM = {
                            DESKTOP: "desktop",
                            MOBILE: "mobile"
                        }, FUNDING = {
                            PAYPAL: "paypal",
                            VENMO: "venmo",
                            CREDIT: "credit",
                            CARD: "card",
                            IDEAL: "ideal",
                            SEPA: "sepa",
                            BANCONTACT: "bancontact",
                            GIROPAY: "giropay",
                            SOFORT: "sofort",
                            EPS: "eps",
                            MYBANK: "mybank",
                            P24: "p24",
                            ZIMPLER: "zimpler",
                            WECHATPAY: "wechatpay"
                        }, CARD = {
                            VISA: "visa",
                            MASTERCARD: "mastercard",
                            AMEX: "amex",
                            DISCOVER: "discover",
                            HIPER: "hiper",
                            ELO: "elo",
                            JCB: "jcb",
                            CUP: "cup"
                        }, DEFAULT_COUNTRY = COUNTRY.US, DEFAULT_CURRENCY = CURRENCY.USD, DEFAULT_INTENT = INTENT.CAPTURE, DEFAULT_COMMIT = COMMIT.TRUE, DEFAULT_VAULT = VAULT.TRUE, DEFAULT_COMPONENTS = COMPONENTS.BUTTONS, DEFAULT_DEBUG = DEBUG.FALSE;
                        __webpack_require__.d(__webpack_exports__, "COUNTRY", function() {
                            return COUNTRY;
                        });
                        __webpack_require__.d(__webpack_exports__, "LANG", function() {
                            return LANG;
                        });
                        __webpack_require__.d(__webpack_exports__, "COUNTRY_LANGS", function() {
                            return COUNTRY_LANGS;
                        });
                        __webpack_require__.d(__webpack_exports__, "SDK_SETTINGS", function() {
                            return SDK_SETTINGS;
                        });
                        __webpack_require__.d(__webpack_exports__, "SDK_QUERY_KEYS", function() {
                            return SDK_QUERY_KEYS;
                        });
                        __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() {
                            return COMPONENTS;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEBUG", function() {
                            return DEBUG;
                        });
                        __webpack_require__.d(__webpack_exports__, "QUERY_BOOL", function() {
                            return QUERY_BOOL;
                        });
                        __webpack_require__.d(__webpack_exports__, "ENV", function() {
                            return ENV;
                        });
                        __webpack_require__.d(__webpack_exports__, "FPTI_KEY", function() {
                            return FPTI_KEY;
                        });
                        __webpack_require__.d(__webpack_exports__, "FPTI_USER_ACTION", function() {
                            return FPTI_USER_ACTION;
                        });
                        __webpack_require__.d(__webpack_exports__, "FPTI_DATA_SOURCE", function() {
                            return FPTI_DATA_SOURCE;
                        });
                        __webpack_require__.d(__webpack_exports__, "FPTI_FEED", function() {
                            return FPTI_FEED;
                        });
                        __webpack_require__.d(__webpack_exports__, "FPTI_SDK_NAME", function() {
                            return FPTI_SDK_NAME;
                        });
                        __webpack_require__.d(__webpack_exports__, "INTENT", function() {
                            return INTENT;
                        });
                        __webpack_require__.d(__webpack_exports__, "COMMIT", function() {
                            return COMMIT;
                        });
                        __webpack_require__.d(__webpack_exports__, "VAULT", function() {
                            return VAULT;
                        });
                        __webpack_require__.d(__webpack_exports__, "CURRENCY", function() {
                            return CURRENCY;
                        });
                        __webpack_require__.d(__webpack_exports__, "PLATFORM", function() {
                            return PLATFORM;
                        });
                        __webpack_require__.d(__webpack_exports__, "FUNDING", function() {
                            return FUNDING;
                        });
                        __webpack_require__.d(__webpack_exports__, "CARD", function() {
                            return CARD;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_COUNTRY", function() {
                            return DEFAULT_COUNTRY;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_CURRENCY", function() {
                            return DEFAULT_CURRENCY;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_INTENT", function() {
                            return DEFAULT_INTENT;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_COMMIT", function() {
                            return DEFAULT_COMMIT;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_VAULT", function() {
                            return DEFAULT_VAULT;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_COMPONENTS", function() {
                            return DEFAULT_COMPONENTS;
                        });
                        __webpack_require__.d(__webpack_exports__, "DEFAULT_DEBUG", function() {
                            return DEFAULT_DEBUG;
                        });
                    }
                });
            });
        }).call(exports, __webpack_require__("../node_modules/webpack/buildin/module.js")(module));
    },
    "../node_modules/paypal-sdk-constants/index.js": function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("../node_modules/paypal-sdk-constants/dist/paypal-sdk-constants.js");
    },
    "../node_modules/squid-core/dist/api.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$Api = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _beaverLogger = __webpack_require__("../node_modules/beaver-logger/index.js");
        var _beaverLogger2 = _interopRequireDefault(_beaverLogger);
        var _event = __webpack_require__("../node_modules/squid-core/dist/event.js");
        var _class = __webpack_require__("../node_modules/squid-core/dist/class.js");
        var _util = __webpack_require__("../node_modules/squid-core/dist/util.js");
        var _promise = __webpack_require__("../node_modules/squid-core/dist/promise.js");
        var _config = __webpack_require__("../node_modules/squid-core/dist/config.js");
        var _error = __webpack_require__("../node_modules/squid-core/dist/error.js");
        var _loader = __webpack_require__("../node_modules/squid-core/dist/loader.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var standardHeaders = {};
        function request(config) {
            return _promise.$promise.resolver(function(resolve, reject) {
                config.method = config.method || "get";
                if (config.method === "get") {
                    delete config.body;
                    delete config.json;
                }
                if (config.method === "post") {
                    delete config.query;
                }
                if (config.query) {
                    config.url = _util.$util.extendUrl(config.url, config.query);
                }
                var headers = config.headers || {};
                if (config.json) {
                    headers["Content-Type"] = headers["Content-Type"] || "application/json";
                } else if (config.body) {
                    headers["Content-Type"] = headers["Content-Type"] || "application/x-www-form-urlencoded; charset=utf-8";
                }
                headers.Accept = headers.Accept || "application/json";
                var xhr = new window.XMLHttpRequest();
                xhr.addEventListener("load", function() {
                    var status = this.status;
                    if (!status) {
                        return reject(new Error("Request did not return a response"));
                    }
                    var json = JSON.parse(this.responseText);
                    var responseHeaders = {};
                    this.getAllResponseHeaders().split("\n").forEach(function(line) {
                        var i = line.indexOf(":");
                        responseHeaders[line.slice(0, i).trim()] = line.slice(i + 1).trim();
                    });
                    return resolve({
                        status: status,
                        headers: responseHeaders,
                        json: json
                    });
                }, false);
                xhr.addEventListener("error", function(evt) {
                    reject(new Error("Request to " + config.method.toLowerCase() + " " + config.url + " failed: " + evt.toString()));
                }, false);
                xhr.open(config.method, config.url, true);
                if (headers) {
                    for (var key in headers) {
                        xhr.setRequestHeader(key, headers[key]);
                    }
                }
                if (config.json && !config.body) {
                    config.body = JSON.stringify(config.json);
                }
                if (config.body && _typeof(config.body) === "object") {
                    config.body = Object.keys(config.body).map(function(key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(config.body[key]);
                    }).join("&");
                }
                xhr.send(config.body);
            });
        }
        _config.$meta.headers = _config.$meta.headers || {};
        _config.$meta.headers["x-cookies"] = _typeof(_config.$meta.headers["x-cookies"]) !== "object" ? JSON.parse(_config.$meta.headers["x-cookies"] || "{}") : _config.$meta.headers["x-cookies"];
        function cookiesEnabled() {
            return _util.$util.cookiesEnabled() && window.location.hostname.indexOf(".paypal.com") > -1;
        }
        var cache = {};
        var windowLoad = _util.$util.memoize(function() {
            return _promise.$promise.resolver(function(resolve) {
                if (document.readyState === "complete") {
                    resolve();
                } else {
                    window.addEventListener("load", resolve);
                }
            });
        });
        var batchQueue = {};
        window.pre = window.pre || {};
        var transientCache = {};
        Object.keys(window.pre).forEach(function(key) {
            var _window$pre$key = window.pre[key], method = _window$pre$key.method, uri = _window$pre$key.uri, res = _window$pre$key.res;
            var preKey = method + ":" + uri;
            transientCache[preKey] = res;
        });
        var transientCacheResolvers = {};
        var metaBuilder = void 0;
        window.preload = function(method, url, data, name) {
            if (name) {
                window.pre[name] = {
                    method: method,
                    uri: url,
                    res: data
                };
            }
            var key = method + ":" + url;
            var resolvers = transientCacheResolvers[key] || [];
            transientCache[key] = data;
            while (resolvers.length) {
                resolvers.pop().call();
            }
        };
        var preloadComplete = false;
        window.preloadComplete = function() {
            preloadComplete = true;
            Object.keys(transientCacheResolvers).forEach(function(key) {
                var resolvers = transientCacheResolvers[key] || [];
                while (resolvers.length) {
                    resolvers.pop().call();
                }
            });
        };
        _beaverLogger2["default"].info(cookiesEnabled() ? "cookies_enabled" : "cookies_disabled");
        var $Api = exports.$Api = _class.$Class.extend("$Api", {
            cache: false,
            timeout: 45e3,
            getAttempts: 3,
            postAttempts: 1,
            action: function action(_action, options) {
                options.action = _action;
                return this.post(options);
            },
            retrieve: function retrieve() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                options.method = "get";
                return this.call(options);
            },
            post: function post(options) {
                options.method = "post";
                return this.call(options);
            },
            call: function call(options) {
                var self = this;
                options.api = this;
                options.uri = this.getURI(options.model, options.action);
                options.params = options.params || {};
                options.cache = options.cache || self.cache && options.method === "get";
                options.name = this.buildAPIName(options);
                options.meta = this.buildMeta();
                options.transientError = options.transientError || false;
                options.cacheKey = _util.$util.buildURL(options.uri, options.params);
                _beaverLogger2["default"].info(options.name + "_call", {
                    name: options.name,
                    method: options.method,
                    uri: options.uri
                });
                if (!options.silent) {
                    _event.$event.emit("loading");
                }
                return _promise.$promise.first([ function() {
                    if (options.cache && cache[options.cacheKey]) {
                        return cache[options.cacheKey];
                    }
                }, function() {
                    return _promise.$promise.providing(self.hasTransientCacheData(options), function() {
                        return self.attemptRequest(options);
                    });
                }, function() {
                    if (options.batch) {
                        return self.batchRequest(options);
                    }
                }, function() {
                    return self.attemptRequest(options);
                } ])["finally"](function() {
                    if (!options.silent) {
                        _event.$event.emit("loaded");
                    }
                }).then(function(res) {
                    if (options.cache) {
                        cache[options.cacheKey] = res;
                    }
                    return self.handleResponse(res.data, options);
                }, function(err) {
                    if (err instanceof _error.$BatchShortCircuit) {
                        return _promise.$promise.reject(err);
                    }
                    return self.handleErrorResponse(err, options);
                });
            },
            batchRequest: function batchRequest(options) {
                _util.$util.assert(options.batch.name, 'Must define a "name" for batch request: ' + options.batch);
                _util.$util.assert(options.batch.id, 'Must define a "id" for batch request: ' + options.batch);
                var name = options.batch.name;
                var id = options.batch.id;
                var batch = batchQueue[name] = batchQueue[name] || {};
                batch[id] = options;
                return this.buildBatchRequest(name).then(function(results) {
                    return results[id].then(function(result) {
                        return result || _promise.$promise.reject(new _error.$BatchShortCircuit());
                    });
                });
            },
            buildBatchRequest: _promise.$promise.debounce(function(name) {
                var self = this;
                var batch = batchQueue[name];
                var batchIds = _class.$Class.keys(batch);
                var batchData = {};
                var headers = {};
                delete batchQueue[name];
                if (batchIds.length === 1) {
                    var batchId = batchIds[0];
                    var opts = batch[batchId];
                    var results = {};
                    results[batchId] = opts.api.attemptRequest(opts);
                    return results;
                }
                _util.$util.forEach(batch, function(options, id) {
                    batchData[id] = {
                        method: options.method,
                        uri: options.api.getURI(options.model, options.action, true),
                        data: options.data,
                        params: options.params,
                        dependencies: options.batch.dependencies
                    };
                    _util.$util.extend(headers, options.headers);
                });
                return $batchApi.action(name, {
                    data: batchData,
                    headers: headers
                }).then(function(res) {
                    return self.handleBatchResponse(batch, res.data);
                });
            }),
            handleBatchResponse: function handleBatchResponse(batch, data) {
                var self = this;
                var promises = {};
                _util.$util.forEach(batch, function(options, id) {
                    promises[id] = _promise.$promise.run(function() {
                        var depsPresent = _promise.$promise.every(options.batch.dependencies || [], function(depName) {
                            if (!batch[depName]) {
                                _beaverLogger2["default"].info("missing_batch_dependency", {
                                    dependency: depName,
                                    available: Object.keys(batch).join("|")
                                });
                            }
                            return !batch[depName] || promises[depName].then(function(dependency) {
                                return dependency && dependency.data && dependency.data.ack === "success";
                            });
                        });
                        return _promise.$promise.providing(depsPresent, function() {
                            return _promise.$promise.providing(data[id], function(result) {
                                self.addTransientCacheData(options.method, options.api.getURI(options.model, options.action), result);
                            }).then(function() {
                                return options.api.attemptRequest(options);
                            });
                        });
                    });
                });
                return promises;
            },
            attemptRequest: function attemptRequest(options) {
                var self = this;
                var attempts = options.method === "get" ? this.getAttempts : this.postAttempts;
                return _promise.$promise.attempt(attempts, function(remaining) {
                    return self.getTransientCacheResponse(options).then(function(res) {
                        if (res) {
                            return res;
                        }
                        return self.getHttpResponse(options);
                    })["catch"](function(res) {
                        if ((!res || !res.status) && attempts === 1) {
                            _beaverLogger2["default"].warn("api_retry_aborted", {
                                method: options.method,
                                uri: options.uri
                            });
                            return self.getHttpResponse(options);
                        }
                        return _promise.$promise.reject(res);
                    })["catch"](function(res) {
                        if (res.status === 401) {
                            _beaverLogger2["default"].warn("api_retry_401", {
                                method: options.method,
                                uri: options.uri
                            });
                            return self.getHttpResponse(options);
                        }
                        return _promise.$promise.reject(res);
                    })["catch"](function(res) {
                        if (res.status === 401) {
                            return {
                                data: {
                                    ack: "permission_denied"
                                }
                            };
                        }
                        if (remaining) {
                            _beaverLogger2["default"].warn("api_retry", {
                                method: options.method,
                                uri: options.uri
                            });
                            return _promise.$promise.reject(res);
                        }
                        if (res && res.data && res.data.ack === "error") {
                            return _promise.$promise.reject(new _error.$ApiError("api_error", {
                                name: options.name,
                                method: options.method,
                                uri: options.uri,
                                stack: res.data.stack,
                                transient: options.transientError
                            }));
                        } else if (res && res.status) {
                            return _promise.$promise.reject(new _error.$ApiError("response_status_" + res.status, {
                                uri: options.uri,
                                transient: options.transientError
                            }));
                        } else if (res && res.error) {
                            return _promise.$promise.reject(new _error.$ApiError("request_" + res.error, {
                                uri: options.uri,
                                transient: options.transientError
                            }));
                        } else {
                            return _promise.$promise.reject(new _error.$ApiError("request_aborted", {
                                uri: options.uri,
                                transient: options.transientError
                            }));
                        }
                    });
                });
            },
            getHttpResponse: function getHttpResponse(options) {
                var self = this;
                var startTime = _util.$util.now();
                var httpRequest = this.http(options);
                return httpRequest["finally"](function() {
                    options.duration = _util.$util.now() - startTime;
                })["catch"](function(res) {
                    if (res && res.status && res.status.toString() === "400" && res.data && res.data.ack) {
                        return res;
                    }
                    return _promise.$promise.reject(res);
                }).then(function(res) {
                    self.saveResponseState(res);
                    var loggerPayload = {
                        name: options.name,
                        method: options.method,
                        uri: options.uri,
                        server: res.data.server,
                        time: options.duration,
                        duration: options.duration
                    };
                    if (window.performance && window.performance.getEntries) {
                        _util.$util.forEach(window.performance.getEntries(), function(resource) {
                            if (resource.name && resource.name.indexOf(options.uri) > -1) {
                                _util.$util.extend(loggerPayload, resource);
                            }
                        });
                    }
                    _beaverLogger2["default"].info("api_response", loggerPayload);
                    if (res && res.status) {
                        _beaverLogger2["default"].info("http_response_" + res.status);
                    }
                    return res;
                }, function(res) {
                    self.saveResponseState(res);
                    if (res && res.status) {
                        _beaverLogger2["default"].info("http_response_" + res.status);
                    }
                    return _promise.$promise.reject(res);
                });
            },
            setTransientCache: function setTransientCache(data) {
                throw new Error("NotImplemented");
            },
            getTransientCacheData: function getTransientCacheData(options, pop) {
                if (!_config.$config.enablePreload) {
                    return _promise.$promise.resolve();
                }
                var preMethod = options.method.toLowerCase();
                var preUri = _util.$util.buildURL(options.uri, options.params);
                var key = preMethod + ":" + preUri;
                return _promise.$promise.resolver(function(resolve) {
                    function res() {
                        var data = transientCache[key];
                        if (pop) {
                            delete transientCache[key];
                        }
                        resolve(data);
                    }
                    transientCacheResolvers[key] = transientCacheResolvers[key] || [];
                    transientCacheResolvers[key].push(res);
                    if (transientCache[key] || document.readyState === "complete" || preloadComplete) {
                        return res();
                    }
                    windowLoad().then(res);
                });
            },
            hasTransientCacheData: function hasTransientCacheData(options) {
                return this.getTransientCacheData(options, false).then(function(data) {
                    return Boolean(data);
                });
            },
            addTransientCacheData: function addTransientCacheData(method, uri, data) {
                window.preload(method, uri, data);
            },
            getTransientCacheResponse: function getTransientCacheResponse(options) {
                return this.getTransientCacheData(options, true).then(function(data) {
                    if (data) {
                        if (data.ack === "error") {
                            return _promise.$promise.reject({
                                status: 500,
                                data: data
                            });
                        } else if (data.ack === "permission_denied") {
                            return _promise.$promise.reject({
                                status: 401,
                                data: data
                            });
                        } else if (data.ack === "contingency" || data.ack === "validation_error") {
                            return {
                                status: 400,
                                data: data
                            };
                        } else {
                            return {
                                status: 200,
                                data: data
                            };
                        }
                    } else if (options.method === "get" && !_loader.$loader.firstLoad() && !options.silent) {
                        _beaverLogger2["default"].info("preload_cache_miss", {
                            uri: options.uri
                        });
                    }
                });
            },
            getHeaders: function getHeaders(options) {
                if (!_config.$meta.headers["x-csrf-jwt"] && !_config.$meta.csrfJwt) {
                    _beaverLogger2["default"].warn("missing_csrf_jwt");
                }
                var headers = {
                    "X-Requested-With": "XMLHttpRequest",
                    "x-csrf-jwt": _config.$meta.headers["x-csrf-jwt"] || _config.$meta.csrfJwt
                };
                if (!cookiesEnabled()) {
                    headers["x-cookies"] = JSON.stringify(_config.$meta.headers["x-cookies"]);
                }
                _util.$util.extend(headers, standardHeaders);
                if (options.headers) {
                    _util.$util.extend(headers, options.headers);
                }
                return headers;
            },
            http: function http(options) {
                return this.httpNative(options);
            },
            httpJQuery: function httpJQuery(options) {
                var settings = {
                    method: options.method,
                    data: options.method === "get" ? options.params : JSON.stringify({
                        data: options.data,
                        meta: options.meta || {}
                    }),
                    headers: this.getHeaders(options),
                    timeout: this.timeout
                };
                if (options.method === "post") {
                    settings.headers["Content-Type"] = "application/json;charset=UTF-8";
                } else if (options.method === "get") {
                    settings.data.meta = JSON.stringify(options.meta);
                }
                return _promise.$promise.resolver(function(resolve, reject) {
                    function getRes(res, data) {
                        return {
                            status: res.status,
                            data: data,
                            headers: function headers(name) {
                                return res.getResponseHeader(name);
                            }
                        };
                    }
                    settings.success = function(data, status, res) {
                        return resolve(getRes(res, data));
                    };
                    settings.error = function(res) {
                        if (res && res.status) {
                            if (res.status >= 400) {
                                return reject(getRes(res, res.responseJSON));
                            } else {
                                return resolve(getRes(res, res.responseJSON));
                            }
                        }
                        return reject({
                            status: 0,
                            headers: _util.$util.noop,
                            error: res && res.statusText
                        });
                    };
                    jQuery.ajax(options.uri, settings);
                });
            },
            httpNative: function httpNative(options) {
                options.params = options.params || {};
                return request({
                    method: options.method,
                    url: options.uri,
                    query: _extends({}, options.params, {
                        meta: JSON.stringify(options.meta)
                    }),
                    json: {
                        data: options.data,
                        meta: options.meta || {}
                    },
                    headers: this.getHeaders(options),
                    timeout: this.timeout
                }).then(function(res) {
                    var response = {
                        status: res.status,
                        data: res.json,
                        headers: function headers(name) {
                            return res.headers[name];
                        }
                    };
                    return response;
                })["catch"](function(err) {
                    return {
                        status: 0,
                        headers: _util.$util.noop,
                        error: err.message
                    };
                }).then(function(res) {
                    if (res.status >= 400) {
                        throw res;
                    }
                    return res;
                });
            },
            saveResponseState: function saveResponseState(res) {
                if (res.headers("x-csrf-jwt")) {
                    _config.$meta.headers["x-csrf-jwt"] = res.headers("x-csrf-jwt");
                    _config.$meta.csrfJwt = res.headers("x-csrf-jwt");
                    _config.$meta.headers["x-csrf-jwt-hash"] = res.headers("x-csrf-jwt-hash");
                }
                if (res.headers("X-cookies")) {
                    _config.$meta.headers["x-cookies-hash"] = res.headers("x-cookies-hash");
                    _util.$util.extend(_config.$meta.headers["x-cookies"], JSON.parse(res.headers("X-cookies") || "{}"));
                }
            },
            handleResponse: function handleResponse(res, options) {
                var loggerName = "ui_" + options.name;
                var loggerPayload = {
                    name: options.name,
                    method: options.method,
                    uri: options.uri,
                    time: options.duration,
                    duration: options.duration
                };
                var resultModel = options.resultModel || options.model;
                return _promise.$promise.call(function() {
                    if (res.data && resultModel) {
                        if (resultModel.populate) {
                            resultModel.populate(res.data);
                        } else {
                            _util.$util.extend(resultModel, res.data);
                        }
                    }
                    if (res && res.ack === "success" && resultModel && resultModel.fetchChildren) {
                        return _promise.$promise.resolve(resultModel.fetchChildren()).then(function(children) {
                            return _util.$util.extend(resultModel, children);
                        });
                    }
                }).then(function() {
                    if (res.ack === "success") {
                        _beaverLogger2["default"].info(loggerName + "_success", loggerPayload);
                        if (options.success) {
                            if (options.success instanceof Function) {
                                return options.success(res.data);
                            }
                            return options.success;
                        }
                        return res;
                    }
                    if (options.failSilently) {
                        return;
                    }
                    if (res.ack === "contingency") {
                        _beaverLogger2["default"].info(loggerName + "_contingency", _util.$util.extend(loggerPayload, {
                            contingency: res.contingency
                        }));
                        if (!res.contingency) {
                            throw new _error.$ApiError("expected_contingency_name", {
                                api: options.name
                            });
                        }
                        var contingency = new _error.$Contingency(res.contingency, {
                            transient: options.transientError
                        });
                        if (resultModel) {
                            resultModel.errorData = res.errorData || {};
                        }
                        var handler = options.contingencies && (options.contingencies[contingency.message] || options.contingencies["DEFAULT"]);
                        _util.$util.extend(contingency, res.errorData);
                        if (handler) {
                            if (handler instanceof Function) {
                                return handler(contingency.message, contingency);
                            }
                            return handler;
                        }
                        throw contingency;
                    } else if (res.ack === "validation") {
                        _beaverLogger2["default"].info(loggerName + "_validation", _util.$util.extend(loggerPayload, {
                            validation: res.validation
                        }));
                        if (options.validation) {
                            return options.validation(res.validation);
                        }
                        throw new _error.$ApiError("validation", {
                            transient: options.transientError
                        });
                    } else if (res.ack === "permission_denied") {
                        _beaverLogger2["default"].info(loggerName + "_denied", loggerPayload);
                        throw new _error.$Forbidden(options.uri + ": forbidden", {
                            transient: options.transientError
                        });
                    } else {
                        _beaverLogger2["default"].info(loggerName + "_noack", loggerPayload);
                        throw new _error.$ApiError("noack", {
                            transient: options.transientError
                        });
                    }
                });
            },
            handleErrorResponse: function handleErrorResponse(err, options) {
                return _promise.$promise.run(function() {
                    if (options.error) {
                        return options.error(err);
                    }
                    throw err;
                });
            },
            getURI: function getURI(model, action, relative) {
                var self = this;
                var uri = [];
                uri.push(this.uri.replace(/\/:[\w\.]+\?/g, function(key) {
                    key = key.slice(2);
                    key = key.substring(0, key.length - 1);
                    var component = model.get ? model.get(key) : model[key];
                    if (!component) {
                        return "";
                    }
                    return "/" + component;
                }).replace(/:[\w\.]+/g, function(key) {
                    key = key.slice(1);
                    var component = model.get ? model.get(key) : model[key];
                    if (!component) {
                        throw new Error('Property "' + key + '" not found in model for: ' + self.uri);
                    }
                    return component;
                }));
                if (action) {
                    uri.push(action);
                }
                if (this.ext) {
                    uri[uri.length - 1] += "." + this.ext;
                }
                uri = "/" + uri.join("/").replace(/\/{2,}/g, "/").replace(/^\//, "");
                if (!relative) {
                    uri = (this.baseURI || _config.$config.urls.baseUrl) + uri;
                }
                return uri;
            },
            buildMeta: function buildMeta() {
                if (metaBuilder) {
                    return metaBuilder();
                }
            },
            buildAPIName: function buildAPIName(options) {
                var self = this;
                var apiName = self.uri.replace(/^\/+/, "").replace(/\//g, "_").replace(/\?(.*)/, "").replace(/[^a-zA-Z0-9_]/g, "");
                apiName = options.action ? apiName + "_" + options.action : apiName;
                apiName = apiName.charAt(0) === "_" ? apiName.slice(1) : apiName;
                return apiName;
            }
        });
        $Api.reopenClass({
            clearCache: function clearCache() {
                cache = {};
            }
        });
        $Api.registerMetaBuilder = function(builder) {
            metaBuilder = builder;
        };
        $Api.addHeader = function(name, value) {
            standardHeaders[name] = value;
        };
        var $batchApi = new $Api({
            uri: "/api/batch",
            postAttempts: 3
        });
        angular.value("$Api", $Api);
        _event.$event;
        _class.$Class;
        _util.$util;
        _promise.$promise;
        _config.$config;
        _config.$meta;
        _error.$Contingency;
        _error.$Forbidden;
        _error.$ApiError;
        _error.$BatchShortCircuit;
        _loader.$loader;
    },
    "../node_modules/squid-core/dist/class.js": function(module, exports) {
        exports.__esModule = true;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var EmptyConstructor = function EmptyConstructor() {};
        var create = Object.create || function create(obj) {
            EmptyConstructor.prototype = obj;
            var instance = new EmptyConstructor();
            EmptyConstructor.prototype = null;
            return instance;
        };
        function _extend(obj, source) {
            if (!source) {
                return obj;
            }
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    obj[key] = source[key];
                }
            }
            return obj;
        }
        function isobject(obj) {
            return obj && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj instanceof Object;
        }
        function transpose(recipient, args) {
            for (var i = 0; i < args.length; i++) {
                var ob = args[i];
                if (!isobject(ob)) {
                    continue;
                }
                for (var key in ob) {
                    if (!ob.hasOwnProperty(key)) {
                        continue;
                    }
                    var item = ob[key];
                    if (item instanceof Function) {
                        item.__name__ = key;
                    }
                    recipient[key] = item;
                }
            }
        }
        function construct() {
            if (this.construct) {
                var ob = this.construct.apply(this, arguments);
                if (isobject(ob)) {
                    return ob;
                }
            }
            transpose(this, arguments);
            if (this.init) {
                this.init();
            }
        }
        function reopen() {
            transpose(this.prototype, arguments);
            return this;
        }
        function reopenClass() {
            transpose(this, arguments);
            transpose(this.__classmethods__, arguments);
            return this;
        }
        function isChild(Cls) {
            return Cls && Cls.prototype instanceof this;
        }
        var id = 0;
        function extend(name) {
            var Cls = void 0, className = void 0, args = void 0, argsLength = void 0, startIndex = void 0;
            if (typeof name === "string") {
                if (!name.match(/^[\w$][\w\d]*$/)) {
                    throw new Error("Class name can not include special characters: " + name);
                }
                className = name;
                argsLength = arguments.length && arguments.length - 1;
                startIndex = 1;
            } else {
                className = this.name || "Object";
                argsLength = arguments.length;
                startIndex = 0;
            }
            args = new Array(argsLength);
            for (var i = startIndex; i < arguments.length; i++) {
                args[i - startIndex] = arguments[i];
            }
            eval("Cls = function " + className + "() { return construct.apply(this, arguments) }");
            Cls.__name__ = className;
            Cls.__classmethods__ = {
                extend: extend,
                reopen: reopen,
                reopenClass: reopenClass,
                isChild: isChild
            };
            id += 1;
            Cls.id = id;
            if (this && this !== window) {
                Cls.prototype = create(this.prototype);
                Cls.prototype.constructor = Cls;
                Cls.prototype._super = this.prototype;
                _extend(Cls.__classmethods__, this.__classmethods__);
            }
            _extend(Cls, Cls.__classmethods__);
            transpose(Cls.prototype, args);
            if (className.indexOf("$") === 0) {
                window[className] = Cls;
            } else {
                window["$" + className] = Cls;
            }
            return Cls;
        }
        function _get(item, path, def) {
            if (!path) {
                return def;
            }
            path = path.split(".");
            for (var i = 0; i < path.length; i++) {
                if (isobject(item)) {
                    item = item[path[i]];
                } else {
                    return def;
                }
            }
            return item === undefined ? def : item;
        }
        function _set(item, path, value) {
            path = path.split(".");
            for (var i = 0; i < path.length - 1; i++) {
                item = item[path[i]];
                if (isobject(item)) {
                    continue;
                } else {
                    throw new Error(path[i - 1] + "." + path[i] + " is not an object");
                }
            }
            item[path[path.length - 1]] = value;
        }
        function each(ob, callback) {
            for (var key in ob) {
                if (ob.hasOwnProperty(key)) {
                    callback.call(ob, key, ob[key]);
                }
            }
        }
        function _keys(ob) {
            if (Object.keys) {
                return Object.keys(ob);
            }
            var result = [];
            for (var key in ob) {
                if (ob.hasOwnProperty(key)) {
                    result.push(key);
                }
            }
            return result;
        }
        var $Class = exports.$Class = extend("Class", {
            init: function init() {},
            get: function get(path, def) {
                return _get(this, path, def);
            },
            set: function set(path, value) {
                _set(this, path, value);
            },
            setProperties: function setProperties() {
                transpose(this, arguments);
            },
            forEach: function forEach(callback) {
                each(this, callback);
            },
            keys: function keys() {
                return _keys(this);
            }
        });
        $Class.get = _get;
        $Class.set = _set;
        $Class.keys = _keys;
        angular.value("$Class", $Class);
    },
    "../node_modules/squid-core/dist/config.js": function(module, exports) {
        exports.__esModule = true;
        var $meta = exports.$meta = window.meta || {};
        var $cookies = exports.$cookies = window.cookies || {};
        var $config = exports.$config = window.config || {};
        angular.value("$meta", $meta);
        angular.value("$cookies", $cookies);
        angular.value("$config", $config);
    },
    "../node_modules/squid-core/dist/error.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$FallbackError = exports.$BatchShortCircuit = exports.$ApiError = exports.$Forbidden = exports.$Contingency = exports.$Error = undefined;
        var _event = __webpack_require__("../node_modules/squid-core/dist/event.js");
        var _class = __webpack_require__("../node_modules/squid-core/dist/class.js");
        var _util = __webpack_require__("../node_modules/squid-core/dist/util.js");
        _util.$util.monkeyPatch(window, "onerror", function(_ref, original) {
            var message = _ref[0], file = _ref[1], line = _ref[2], col = _ref[3], err = _ref[4];
            original();
            _event.$event.emit("$windowError", {
                message: message && (message.stack || message).toString(),
                file: file && file.toString(),
                line: line && line.toString(),
                col: col && col.toString(),
                stack: err && (err.stack || err).toString()
            });
        });
        var $Error = exports.$Error = _class.$Class.extend.call(Error, "$Error", {
            construct: function construct(err, properties) {
                if (err instanceof Error) {
                    err = err.message;
                }
                if (properties) {
                    _util.$util.extend(this, properties);
                }
                this.payload = properties;
                this.message = err;
            }
        });
        var $Contingency = exports.$Contingency = $Error.extend("$Contingency", {
            handle: function handle(handlers) {
                var handler = handlers[this.message] || handlers["DEFAULT"];
                if (handler) {
                    var result = handler.call(this, this.message, this);
                    if (typeof result !== "undefined") {
                        return result;
                    }
                    return true;
                }
            }
        });
        var $Forbidden = exports.$Forbidden = $Error.extend("$Forbidden");
        var $ApiError = exports.$ApiError = $Error.extend("$ApiError");
        var $BatchShortCircuit = exports.$BatchShortCircuit = $Error.extend("$BatchShortCircuit");
        var $FallbackError = exports.$FallbackError = $Error.extend("$FallbackError", {
            init: function init() {
                this.reason = this.reason || "";
                this.product = this.product || "";
                this.entryPoint = this.entryPoint || "";
            }
        });
        angular.value("$Error", $Error);
        angular.value("$Contingency", $Contingency);
        angular.value("$Forbidden", $Forbidden);
        angular.value("$ApiError", $ApiError);
        angular.value("$BatchShortCircuit", $BatchShortCircuit);
        angular.value("$FallbackError", $FallbackError);
        _event.$event;
        _class.$Class;
        _util.$util;
    },
    "../node_modules/squid-core/dist/event.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$event = undefined;
        var _promise = __webpack_require__("../node_modules/squid-core/dist/promise.js");
        var handlers = {};
        var customEventEmitter = void 0;
        var $event = exports.$event = {
            use: function use(eventEmitter) {
                customEventEmitter = eventEmitter;
                for (var _iterator = Object.keys(handlers), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var eventName = _ref;
                    if (handlers[eventName]) {
                        for (var _iterator2 = handlers[eventName], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref2 = _i2.value;
                            }
                            var handler = _ref2;
                            customEventEmitter.on(eventName, handler);
                        }
                    }
                }
            },
            on: function on(eventName, method) {
                if (customEventEmitter) {
                    return customEventEmitter.on(eventName, method);
                }
                handlers[eventName] = handlers[eventName] || [];
                handlers[eventName].push(method);
                var cancelled = false;
                function cancel() {
                    if (!cancelled) {
                        handlers[eventName].splice(handlers[eventName].indexOf(method), 1);
                        cancelled = true;
                    }
                }
                cancel.cancel = cancel;
                return cancel;
            },
            once: function once(eventName, method) {
                if (customEventEmitter) {
                    return customEventEmitter.once(eventName, method);
                }
                var listener = $event.on(eventName, function() {
                    listener.cancel();
                    return method.apply(this, arguments);
                });
                return listener;
            },
            emit: function emit(eventName) {
                if (customEventEmitter) {
                    var _customEventEmitter;
                    return (_customEventEmitter = customEventEmitter).emit.apply(_customEventEmitter, arguments);
                }
                var event = {
                    preventDefault: function preventDefault() {
                        event.defaultPrevented = true;
                    }
                };
                if (handlers[eventName]) {
                    for (var _iterator3 = Array.prototype.slice.apply(handlers[eventName]), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray3) {
                            if (_i3 >= _iterator3.length) break;
                            _ref3 = _iterator3[_i3++];
                        } else {
                            _i3 = _iterator3.next();
                            if (_i3.done) break;
                            _ref3 = _i3.value;
                        }
                        var handler = _ref3;
                        handler.apply.apply(handler, [ this, event ].concat(Array.prototype.slice.call(arguments)));
                    }
                }
                return event;
            },
            broadcast: function broadcast(eventName) {
                if (customEventEmitter) {
                    var _customEventEmitter2;
                    return (_customEventEmitter2 = customEventEmitter).broadcast.apply(_customEventEmitter2, arguments);
                }
                return $event.emit.apply($event, arguments);
            },
            refCount: function refCount($scope, start, stop) {
                return _promise.$promise.resolver(function(resolve) {
                    var count = 0;
                    function res() {
                        if (!count) {
                            if (cancelStartListener && cancelStopListener) {
                                cancelStartListener();
                                cancelStopListener();
                            }
                            return resolve();
                        }
                    }
                    var cancelStartListener = $scope.$on(start, function(event, data) {
                        count += 1;
                    });
                    var cancelStopListener = $scope.$on(stop, function(event, data) {
                        setTimeout(function() {
                            count -= 1;
                            res();
                        }, 50);
                    });
                    setTimeout(res, 50);
                });
            },
            compose: function compose(start, end, startAll, endAll) {
                var count = 0;
                $event.on(start, function() {
                    if (!count) {
                        setTimeout(function() {
                            $event.emit(startAll);
                        });
                    }
                    count += 1;
                });
                $event.on(end, function() {
                    setTimeout(function() {
                        count -= 1;
                        if (!count) {
                            $event.emit(endAll);
                        }
                    }, 50);
                });
                return {
                    getCount: function getCount() {
                        return count;
                    },
                    isActive: function isActive() {
                        return Boolean(count);
                    },
                    reset: function reset() {
                        count = 0;
                    }
                };
            }
        };
        angular.value("$event", $event);
        _promise.$promise;
    },
    "../node_modules/squid-core/dist/integration.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$integration = exports.$CONTEXT = exports.$DEFAULT = undefined;
        var _beaverLogger = __webpack_require__("../node_modules/beaver-logger/index.js");
        var _beaverLogger2 = _interopRequireDefault(_beaverLogger);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var $DEFAULT = exports.$DEFAULT = "DEFAULT";
        var $CONTEXT = exports.$CONTEXT = {
            FULLPAGE: "FULLPAGE",
            POPUP: "POPUP",
            LIGHTBOX: "LIGHTBOX",
            WEBVIEW: "WEBVIEW",
            NATIVE_CHECKOUT: "NATIVE_CHECKOUT"
        };
        var $integration = exports.$integration = {
            flow: $DEFAULT,
            init: function init(flow, config) {
                this.config = config || {};
                if (flow) {
                    this.setFlow(flow);
                }
                this.setContext(this.getContext());
            },
            getContext: function getContext() {
                if (this.isIFrame()) {
                    return $CONTEXT.LIGHTBOX;
                } else if (this.isPopup()) {
                    return $CONTEXT.POPUP;
                } else {
                    return $CONTEXT.FULLPAGE;
                }
            },
            isPopup: function isPopup() {
                return Boolean(window.opener);
            },
            isIFrame: function isIFrame() {
                return window.top !== window.self;
            },
            setContext: function setContext(context) {
                _beaverLogger2["default"].info("integration_context_" + context);
                this.context = context;
            },
            setFlow: function setFlow(flow) {
                _beaverLogger2["default"].info("integration_flow_" + flow);
                this.flow = flow;
            },
            is: function is(context, flow) {
                return this.isContext(context) && this.isFlow(flow);
            },
            isContext: function isContext(context) {
                return this.context === context;
            },
            isFlow: function isFlow(flow) {
                return this.flow === flow;
            },
            getConfig: function getConfig(key) {
                this.context = this.getContext();
                if (!this.config) {
                    return;
                }
                if (this.config.hasOwnProperty(this.context) && this.config[this.context].hasOwnProperty(this.flow) && this.config[this.context][this.flow].hasOwnProperty(key)) {
                    return this.config[this.context][this.flow][key];
                }
                if (this.config.hasOwnProperty(this.context) && this.config[this.context].hasOwnProperty(key)) {
                    return this.config[this.context][key];
                }
                if (this.config.hasOwnProperty($DEFAULT) && this.config[$DEFAULT].hasOwnProperty(this.flow) && this.config[$DEFAULT][this.flow].hasOwnProperty(key)) {
                    return this.config[$DEFAULT][this.flow][key];
                }
                if (this.config.hasOwnProperty($DEFAULT) && this.config[$DEFAULT].hasOwnProperty(key)) {
                    return this.config[$DEFAULT][key];
                }
            },
            error: function error(message) {
                return new Error("Integration error: " + this.context + " / " + this.flow + " :: " + message);
            }
        };
        angular.value("$DEFAULT", $DEFAULT);
        angular.value("$CONTEXT", $CONTEXT);
        angular.value("$integration", $integration);
    },
    "../node_modules/squid-core/dist/loader.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$loader = undefined;
        var _event = __webpack_require__("../node_modules/squid-core/dist/event.js");
        var _firstLoad = false;
        var loader = _event.$event.compose("loading", "loaded", "startLoad", "allLoaded");
        var $loader = exports.$loader = {
            isLoading: function isLoading() {
                return Boolean(loader.getCount());
            },
            firstLoad: function firstLoad() {
                return _firstLoad;
            },
            reset: function reset() {
                loader.reset();
            }
        };
        _event.$event.on("allLoaded", function() {
            _firstLoad = true;
        });
        angular.value("$loader", $loader);
        _event.$event;
    },
    "../node_modules/squid-core/dist/promise.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$promise = $promise;
        var _util = __webpack_require__("../node_modules/squid-core/dist/util.js");
        if (window.Promise) {
            window.Promise.prototype["finally"] = function(callback) {
                var promise = this.constructor;
                return this.then(function(value) {
                    return promise.resolve(callback()).then(function() {
                        return value;
                    });
                }, function(err) {
                    return promise.resolve(callback()).then(function() {
                        throw err;
                    });
                });
            };
        }
        var Promise = window.Promise;
        function $promise(obj) {
            return Promise.resolve(obj);
        }
        _util.$util.extend($promise, {
            use: function use(CustomPromise) {
                Promise = CustomPromise;
            },
            resolver: function resolver(method) {
                return new Promise(method);
            },
            resolve: function resolve(value) {
                return Promise.resolve(value);
            },
            reject: function reject(value) {
                return Promise.reject(value);
            },
            run: function run(method) {
                return Promise.resolve().then(method);
            },
            call: function call(method) {
                return Promise.resolve().then(method);
            },
            sequential: function sequential(methods) {
                var prom = Promise.resolve();
                _util.$util.forEach(methods, function(method) {
                    prom = prom.then(method);
                });
                return prom;
            },
            sleep: function sleep(time) {
                return new Promise(function(resolve) {
                    setTimeout(resolve, time);
                });
            },
            map: function map(items, method) {
                var promises = void 0;
                if (items instanceof Array) {
                    promises = [];
                } else if (items instanceof Object) {
                    promises = {};
                } else {
                    return Promise.resolve();
                }
                return this.all(_util.$util.map(items, function(item, key) {
                    promises[key] = Promise.resolve(item).then(function(result) {
                        return method(result, key, promises);
                    });
                    return promises[key];
                }));
            },
            all: function all(items) {
                if (items instanceof Array) {
                    return Promise.all(items);
                } else if (items instanceof Object) {
                    return this.hash(items);
                }
                return Promise.resolve([]);
            },
            hash: function hash(obj) {
                var results = {};
                return Promise.all(_util.$util.map(obj, function(item, key) {
                    return Promise.resolve(item).then(function(result) {
                        results[key] = result;
                    });
                })).then(function() {
                    return results;
                });
            },
            extend: function extend(obj, hash) {
                return this.hash(hash || {}).then(function(data) {
                    _util.$util.extend(obj, data);
                });
            },
            attempt: function attempt(attempts, method) {
                attempts -= 1;
                return Promise.resolve().then(function() {
                    return method(attempts);
                })["catch"](function(err) {
                    if (attempts) {
                        return $promise.attempt(attempts, method);
                    }
                    return Promise.reject(err);
                });
            },
            debounce: function debounce(method, time) {
                var timeout = void 0;
                var resolvers = {};
                return function() {
                    var self = this;
                    var args = arguments;
                    var key = JSON.stringify(args);
                    resolvers[key] = resolvers[key] || [];
                    return new Promise(function(resolve) {
                        resolvers[key].push(resolve);
                        clearTimeout(timeout);
                        timeout = setTimeout(function() {
                            var result = method.apply(self, args);
                            _util.$util.forEach(resolvers[key], function(resolver) {
                                resolver(result);
                            });
                            delete resolvers[key];
                        }, time);
                    });
                };
            },
            every: function every(collection, handler) {
                return this.map(collection, function(item) {
                    return handler(item);
                }).then(function(results) {
                    return _util.$util.every(results);
                });
            },
            providing: function providing(condition, handler) {
                return Promise.resolve(condition).then(function(result) {
                    if (result) {
                        return handler(result);
                    }
                });
            },
            until: function until(condition, pollTime, timeout, alwaysResolve) {
                return new Promise(function(resolve, reject) {
                    if (condition()) {
                        return resolve();
                    }
                    var interval = setInterval(function() {
                        if (condition()) {
                            clearInterval(interval);
                            return resolve();
                        }
                    }, pollTime);
                    if (timeout) {
                        setTimeout(function() {
                            clearInterval(interval);
                            return alwaysResolve ? resolve() : reject();
                        }, timeout);
                    }
                });
            },
            first: function first(handlers) {
                var prom = $promise.resolve();
                var result = void 0;
                _util.$util.forEach(handlers, function(handler) {
                    prom = prom.then(function() {
                        return result || handler();
                    }).then(function(handlerResult) {
                        result = handlerResult;
                        return result;
                    });
                });
                return prom;
            }
        });
        angular.value("$promise", $promise);
        _util.$util;
    },
    "../node_modules/squid-core/dist/util.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$unresolved = exports.$util = undefined;
        exports.$getRedirectUrl = $getRedirectUrl;
        exports.$dispatch = $dispatch;
        exports.$experiment = $experiment;
        var _event = __webpack_require__("../node_modules/squid-core/dist/event.js");
        var _beaverLogger = __webpack_require__("../node_modules/beaver-logger/index.js");
        var _beaverLogger2 = _interopRequireDefault(_beaverLogger);
        var _config = __webpack_require__("../node_modules/squid-core/dist/config.js");
        var _integration = __webpack_require__("../node_modules/squid-core/dist/integration.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        var redirected = false;
        var paramCache = {};
        var $util = exports.$util = {
            forEach: function forEach(collection, method) {
                if (collection instanceof Array) {
                    for (var i = 0; i < collection.length; i++) {
                        method(collection[i], i);
                    }
                } else if (collection instanceof Object) {
                    for (var key in collection) {
                        if (collection.hasOwnProperty(key)) {
                            method(collection[key], key);
                        }
                    }
                }
            },
            idleTimeout: function idleTimeout(time) {
                setTimeout(function() {
                    _beaverLogger2["default"].info("page_idle");
                    $util.reload();
                }, time);
            },
            reload: function reload() {
                _beaverLogger2["default"].info("reload");
                window.location.reload();
            },
            redirect: function redirect(url, options) {
                if (url.indexOf("javascript:") !== -1) {
                    _beaverLogger2["default"].error("unsafe_redirect_url", {
                        url: url
                    });
                    throw new Error("Unsafe redirect url: " + url);
                }
                _beaverLogger2["default"].info("redirect", {
                    url: url
                });
                _event.$event.on("$stateChangeStart", function(event) {
                    _beaverLogger2["default"].info("state_change_after_redirect");
                    event.preventDefault();
                });
                function redir() {
                    if (redirected) {
                        return;
                    }
                    _beaverLogger2["default"].info("redirect", {
                        url: url
                    });
                    window.onunload = window.onbeforeunload = function() {};
                    if (_integration.$integration.getConfig("REDIRECT_TOP") !== false) {
                        window.top.location = url;
                    } else {
                        window.location = url;
                    }
                    redirected = true;
                }
                _event.$event.emit("loading");
                _beaverLogger2["default"].flush().then(redir);
                setTimeout(redir, 500);
                _beaverLogger2["default"].done();
            },
            cookiesEnabled: function cookiesEnabled() {
                var cookiesEnabled = void 0;
                document.cookie = "_cookiecheck=1";
                cookiesEnabled = Boolean(document.cookie.indexOf("_cookiecheck") > -1);
                document.cookie = "_cookiecheck=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                document.cookie = "_cookiecheck; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                return cookiesEnabled;
            },
            params: function params(string) {
                if (typeof string !== "string") {
                    string = this.queryString().slice(1);
                }
                var params = {};
                if (!string) {
                    return params;
                }
                if (paramCache[string]) {
                    return paramCache[string];
                }
                $util.forEach(string.split("&"), function(pair) {
                    pair = pair.split("=");
                    if (pair[0] && pair[1]) {
                        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                    }
                });
                paramCache[string] = params;
                return params;
            },
            queryString: function queryString() {
                if (window.location.search) {
                    return window.location.search;
                } else {
                    var string = window.location.href;
                    var idx = string.indexOf("&");
                    var rIdx = string.lastIndexOf("#");
                    if (idx) {
                        return "?" + string.substring(idx, rIdx >= 0 ? rIdx : string.length);
                    }
                }
                return "";
            },
            queryStringSplice: function queryStringSplice(qs, insert, remove) {
                if (qs.indexOf("?") === 0) {
                    qs = qs.slice(1);
                }
                var params = $util.extend(this.params(qs), insert);
                $util.forEach(remove, function(key) {
                    delete params[key];
                });
                return "?" + this.paramToQueryString(params);
            },
            extend: function extend(obj, source) {
                if (!source) {
                    return obj;
                }
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        obj[key] = source[key];
                    }
                }
                return obj;
            },
            paramToQueryString: function paramToQueryString(params) {
                return this.filter(this.map(Object.keys(params).sort(), function(key) {
                    if (!params[key]) {
                        return;
                    }
                    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
                })).join("&");
            },
            extendUrl: function extendUrl(url, query) {
                url += url.indexOf("?") === -1 ? "?" : "&";
                return url + $util.paramToQueryString(query);
            },
            param: function $param(name) {
                return this.params()[name];
            },
            hashParam: function hashParam(name) {
                return this.params(window.location.hash.slice(1))[name];
            },
            base64Decode: function base64Decode(encodedString) {
                return encodedString && window.atob(encodedString);
            },
            decodeAndParse: function decodeAndParse(encodedString) {
                if (encodedString) {
                    return this.params(decodeURIComponent(this.base64Decode(encodedString)));
                }
            },
            assert: function $assert(value, message, payload) {
                if (!value) {
                    throw new Error(message, payload || {});
                }
            },
            map: function $map(array, method) {
                array = array || [];
                var results = void 0;
                if (array instanceof Array) {
                    results = [];
                    $util.forEach(array, function() {
                        results.push(method.apply(this, arguments));
                    });
                    return results;
                } else if (array instanceof Object) {
                    results = {};
                    $util.forEach(array, function(val, key) {
                        results[key] = method.apply(this, arguments);
                    });
                    return results;
                } else {
                    throw new Error("$util.map expects array or object");
                }
            },
            filter: function $filter(array, method) {
                method = method || Boolean;
                var results = [];
                $util.forEach(array, function(item) {
                    if (method.apply(this, arguments)) {
                        results.push(item);
                    }
                });
                return results;
            },
            find: function $find(array, method) {
                if (!array) {
                    return;
                }
                for (var i = 0; i < array.length; i++) {
                    if (method(array[i])) {
                        return array[i];
                    }
                }
            },
            findIndex: function $find(array, method) {
                if (!array) {
                    return;
                }
                for (var i = 0; i < array.length; i++) {
                    if (method(array[i])) {
                        return i;
                    }
                }
            },
            range: function range(start, end) {
                if (!end) {
                    end = start;
                    start = 0;
                }
                var result = [];
                for (var i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            pad: function $pad(string, n, char) {
                n = n || 0;
                char = char || "0";
                var padding = Array(n + 1).join(char.toString());
                return (padding + string).slice(-n);
            },
            some: function $some(array, method) {
                var result = void 0;
                $util.forEach(array, function(item, key) {
                    if (!result) {
                        result = method(item, key);
                    }
                });
                return result;
            },
            every: function $every(array, method) {
                method = method || Boolean;
                var result = true;
                $util.forEach(array, function(item) {
                    if (!method(item)) {
                        result = false;
                    }
                });
                return result;
            },
            reduce: function $reduce(array, method, intial) {
                $util.forEach(array, function(item) {
                    intial = method(intial, item);
                });
                return intial;
            },
            isPopup: function isPopup() {
                return _integration.$integration.isPopup();
            },
            isIFrame: function isIFrame() {
                return _integration.$integration.isIFrame();
            },
            buildURL: function buildURL(url, params) {
                this.assert(url, "buildURL :: expected url");
                var paramKeys = Object.keys(params || {});
                if (JSON.stringify(params) === "{}") {
                    return url;
                }
                if (!paramKeys.length) {
                    return url;
                }
                if (url.indexOf("?") === -1) {
                    url += "?";
                } else {
                    url += "&";
                }
                url += this.paramToQueryString(params);
                return url;
            },
            paypalURL: function paypalURL(url, params) {
                url = "https://" + (_config.$meta.stage ? _config.$meta.stage : window.location.host) + url;
                return this.buildURL(url, params);
            },
            override: function override(obj, methodName, handler) {
                var existing = obj[methodName];
                obj[methodName] = function() {
                    if (existing) {
                        try {
                            existing.apply(obj, arguments);
                        } catch (err) {
                            _beaverLogger2["default"].error(methodName + "event_error", {
                                error: err.toString
                            });
                        }
                    }
                    return handler.apply(obj, arguments);
                };
            },
            result: function result(method) {
                return method();
            },
            memoize: function memoize(method) {
                var result = void 0;
                var called = false;
                function memoized() {
                    if (!called) {
                        result = method.apply(this, arguments);
                    }
                    called = true;
                    return result;
                }
                memoized.flush = function() {
                    called = false;
                };
                return memoized;
            },
            now: function now() {
                return window.enablePerformance ? parseInt(window.performance.now(), 10) : Date.now();
            },
            bindObject: function bindObject(obj, self) {
                return $util.map(obj, function(method) {
                    return method.bind(self);
                });
            },
            hashStr: function hashStr(str) {
                var hash = 0, i = void 0, chr = void 0, len = void 0;
                if (str.length === 0) {
                    return hash;
                }
                for (i = 0, len = str.length; i < len; i++) {
                    chr = str.charCodeAt(i);
                    hash = (hash << 5) - hash + chr;
                    hash |= 0;
                }
                return Math.abs(hash);
            },
            hash: function hash() {
                return this.hashStr(Math.random());
            },
            popup: function popup(name, url, options, callback) {
                callback = $util.once(callback);
                var win = window.open(url, name, $util.map(Object.keys(options), function(key) {
                    return key + "=" + options[key];
                }).join(", "));
                var interval = void 0;
                function checkWindowClosed() {
                    if (win.closed) {
                        clearInterval(interval);
                        callback();
                    }
                }
                interval = setInterval(checkWindowClosed, 50);
                setTimeout(checkWindowClosed);
                try {
                    var close = win.close;
                    win.close = function() {
                        close.apply(this, arguments);
                        checkWindowClosed();
                    };
                } catch (err) {}
                return win;
            },
            unique: function unique(collection) {
                return collection.filter(function(value, index, self) {
                    return self.indexOf(value) === index;
                });
            },
            monkeyPatch: function monkeyPatch(mod, prop, method) {
                var original = mod[prop];
                mod[prop] = function() {
                    var _this = this, _arguments = arguments;
                    return method.call(this, arguments, function(self, args) {
                        if (original) {
                            return original.apply(self || _this, args || _arguments);
                        }
                    });
                };
            },
            once: function once(method) {
                var called = false;
                return function() {
                    if (!called) {
                        called = true;
                        return method.apply(this, arguments);
                    }
                };
            },
            camelToDasherize: function camelToDasherize(string) {
                return string.replace(/([A-Z])/g, function(g) {
                    return "-" + g.toLowerCase();
                });
            },
            camelToCapsUnderscore: function camelToCapsUnderscore(string) {
                return string.replace(/([a-z][A-Z])/g, function(g) {
                    return g[0] + "_" + g[1];
                }).toUpperCase();
            },
            dasherizeToCamel: function dasherizeToCamel(string) {
                return string.replace(/-([a-z])/g, function(g) {
                    return g[1].toUpperCase();
                });
            },
            parentWindow: function parentWindow() {
                if (window.opener) {
                    return window.opener;
                } else if (window.parent !== window) {
                    return window.parent;
                }
            },
            noop: function noop() {}
        };
        var $unresolved = exports.$unresolved = {
            then: $util.noop,
            catch: $util.noop
        };
        function $getRedirectUrl(product, params) {
            var url = "";
            var urlParams = $util.params();
            if (_config.$config.deploy.isLocal() || _config.$config.deploy.isStage()) {
                url = _config.$config.urls.dispatch && _config.$config.urls.dispatch[product] || "";
            }
            url += _config.$config.urls.fallbackUrl[product];
            $util.extend(urlParams, params || {});
            if (urlParams.cmd) {
                delete urlParams.cmd;
            }
            return $util.buildURL(url, urlParams);
        }
        function $dispatch(product, params, stateChange) {
            $util.assert(product, "expected product");
            _beaverLogger2["default"].log("info", "dispatch", {
                product: product
            });
            _event.$event.emit("loading");
            var url = "";
            url = $getRedirectUrl(product, params);
            if (stateChange) {
                _event.$event.emit("page_loaded", stateChange.fromState, stateChange.toState);
            }
            return $util.redirect(url);
        }
        function $experiment(name, sample, id, loggerPayload) {
            var throttle = $util.hashStr(name + "_" + id) % 100;
            var group = void 0;
            if ($util.param(name) === "true") {
                group = "test_forced";
            } else if ($util.param(name) === "false") {
                group = "control_forced";
            } else if (throttle < sample) {
                group = "test";
            } else if (sample >= 50 || sample <= throttle && throttle < sample * 2) {
                group = "control";
            } else {
                group = "throttle";
            }
            _beaverLogger2["default"].info("fpti_pxp_check", {
                from: "PXP_CHECK",
                to: "process_pxp_check",
                pxp_exp_id: name,
                pxp_trtmnt_id: group
            });
            _beaverLogger2["default"].info(name + "_" + group, loggerPayload || {});
            if (group === "test" || group === "test_forced") {
                return true;
            } else if (group === "control") {
                return false;
            }
        }
        angular.value("$util", $util);
        angular.value("$unresolved", $unresolved);
        angular.value("$getRedirectUrl", $getRedirectUrl);
        angular.value("$dispatch", $dispatch);
        angular.value("$experiment", $experiment);
        _event.$event;
        _config.$config;
        _config.$meta;
        _integration.$integration;
    },
    "../node_modules/util/support/isBufferBrowser.js": function(module, exports) {
        module.exports = function isBuffer(arg) {
            return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
        };
    },
    "../node_modules/util/util.js": function(module, exports, __webpack_require__) {
        (function(global, console) {
            var formatRegExp = /%[sdj%]/g;
            exports.format = function(f) {
                if (!isString(f)) {
                    var objects = [];
                    for (var i = 0; i < arguments.length; i++) {
                        objects.push(inspect(arguments[i]));
                    }
                    return objects.join(" ");
                }
                var i = 1;
                var args = arguments;
                var len = args.length;
                var str = String(f).replace(formatRegExp, function(x) {
                    if (x === "%%") return "%";
                    if (i >= len) return x;
                    switch (x) {
                      case "%s":
                        return String(args[i++]);

                      case "%d":
                        return Number(args[i++]);

                      case "%j":
                        try {
                            return JSON.stringify(args[i++]);
                        } catch (_) {
                            return "[Circular]";
                        }

                      default:
                        return x;
                    }
                });
                for (var x = args[i]; i < len; x = args[++i]) {
                    if (isNull(x) || !isObject(x)) {
                        str += " " + x;
                    } else {
                        str += " " + inspect(x);
                    }
                }
                return str;
            };
            exports.deprecate = function(fn, msg) {
                if (isUndefined(global.process)) {
                    return function() {
                        return exports.deprecate(fn, msg).apply(this, arguments);
                    };
                }
                if (process.noDeprecation === true) {
                    return fn;
                }
                var warned = false;
                function deprecated() {
                    if (!warned) {
                        if (process.throwDeprecation) {
                            throw new Error(msg);
                        } else if (process.traceDeprecation) {
                            console.trace(msg);
                        } else {
                            console.error(msg);
                        }
                        warned = true;
                    }
                    return fn.apply(this, arguments);
                }
                return deprecated;
            };
            var debugs = {};
            var debugEnviron;
            exports.debuglog = function(set) {
                if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
                set = set.toUpperCase();
                if (!debugs[set]) {
                    if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
                        var pid = process.pid;
                        debugs[set] = function() {
                            var msg = exports.format.apply(exports, arguments);
                            console.error("%s %d: %s", set, pid, msg);
                        };
                    } else {
                        debugs[set] = function() {};
                    }
                }
                return debugs[set];
            };
            function inspect(obj, opts) {
                var ctx = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) ctx.depth = arguments[2];
                if (arguments.length >= 4) ctx.colors = arguments[3];
                if (isBoolean(opts)) {
                    ctx.showHidden = opts;
                } else if (opts) {
                    exports._extend(ctx, opts);
                }
                if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                if (isUndefined(ctx.depth)) ctx.depth = 2;
                if (isUndefined(ctx.colors)) ctx.colors = false;
                if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                if (ctx.colors) ctx.stylize = stylizeWithColor;
                return formatValue(ctx, obj, ctx.depth);
            }
            exports.inspect = inspect;
            inspect.colors = {
                bold: [ 1, 22 ],
                italic: [ 3, 23 ],
                underline: [ 4, 24 ],
                inverse: [ 7, 27 ],
                white: [ 37, 39 ],
                grey: [ 90, 39 ],
                black: [ 30, 39 ],
                blue: [ 34, 39 ],
                cyan: [ 36, 39 ],
                green: [ 32, 39 ],
                magenta: [ 35, 39 ],
                red: [ 31, 39 ],
                yellow: [ 33, 39 ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(str, styleType) {
                var style = inspect.styles[styleType];
                if (style) {
                    return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m";
                } else {
                    return str;
                }
            }
            function stylizeNoColor(str, styleType) {
                return str;
            }
            function arrayToHash(array) {
                var hash = {};
                array.forEach(function(val, idx) {
                    hash[val] = true;
                });
                return hash;
            }
            function formatValue(ctx, value, recurseTimes) {
                if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                    var ret = value.inspect(recurseTimes, ctx);
                    if (!isString(ret)) {
                        ret = formatValue(ctx, ret, recurseTimes);
                    }
                    return ret;
                }
                var primitive = formatPrimitive(ctx, value);
                if (primitive) {
                    return primitive;
                }
                var keys = Object.keys(value);
                var visibleKeys = arrayToHash(keys);
                if (ctx.showHidden) {
                    keys = Object.getOwnPropertyNames(value);
                }
                if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
                    return formatError(value);
                }
                if (keys.length === 0) {
                    if (isFunction(value)) {
                        var name = value.name ? ": " + value.name : "";
                        return ctx.stylize("[Function" + name + "]", "special");
                    }
                    if (isRegExp(value)) {
                        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                    }
                    if (isDate(value)) {
                        return ctx.stylize(Date.prototype.toString.call(value), "date");
                    }
                    if (isError(value)) {
                        return formatError(value);
                    }
                }
                var base = "", array = false, braces = [ "{", "}" ];
                if (isArray(value)) {
                    array = true;
                    braces = [ "[", "]" ];
                }
                if (isFunction(value)) {
                    var n = value.name ? ": " + value.name : "";
                    base = " [Function" + n + "]";
                }
                if (isRegExp(value)) {
                    base = " " + RegExp.prototype.toString.call(value);
                }
                if (isDate(value)) {
                    base = " " + Date.prototype.toUTCString.call(value);
                }
                if (isError(value)) {
                    base = " " + formatError(value);
                }
                if (keys.length === 0 && (!array || value.length == 0)) {
                    return braces[0] + base + braces[1];
                }
                if (recurseTimes < 0) {
                    if (isRegExp(value)) {
                        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                    } else {
                        return ctx.stylize("[Object]", "special");
                    }
                }
                ctx.seen.push(value);
                var output;
                if (array) {
                    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
                } else {
                    output = keys.map(function(key) {
                        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                    });
                }
                ctx.seen.pop();
                return reduceToSingleString(output, base, braces);
            }
            function formatPrimitive(ctx, value) {
                if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
                if (isString(value)) {
                    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return ctx.stylize(simple, "string");
                }
                if (isNumber(value)) return ctx.stylize("" + value, "number");
                if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
                if (isNull(value)) return ctx.stylize("null", "null");
            }
            function formatError(value) {
                return "[" + Error.prototype.toString.call(value) + "]";
            }
            function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                var output = [];
                for (var i = 0, l = value.length; i < l; ++i) {
                    if (hasOwnProperty(value, String(i))) {
                        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
                    } else {
                        output.push("");
                    }
                }
                keys.forEach(function(key) {
                    if (!key.match(/^\d+$/)) {
                        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                    }
                });
                return output;
            }
            function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                var name, str, desc;
                desc = Object.getOwnPropertyDescriptor(value, key) || {
                    value: value[key]
                };
                if (desc.get) {
                    if (desc.set) {
                        str = ctx.stylize("[Getter/Setter]", "special");
                    } else {
                        str = ctx.stylize("[Getter]", "special");
                    }
                } else {
                    if (desc.set) {
                        str = ctx.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(visibleKeys, key)) {
                    name = "[" + key + "]";
                }
                if (!str) {
                    if (ctx.seen.indexOf(desc.value) < 0) {
                        if (isNull(recurseTimes)) {
                            str = formatValue(ctx, desc.value, null);
                        } else {
                            str = formatValue(ctx, desc.value, recurseTimes - 1);
                        }
                        if (str.indexOf("\n") > -1) {
                            if (array) {
                                str = str.split("\n").map(function(line) {
                                    return "  " + line;
                                }).join("\n").substr(2);
                            } else {
                                str = "\n" + str.split("\n").map(function(line) {
                                    return "   " + line;
                                }).join("\n");
                            }
                        }
                    } else {
                        str = ctx.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(name)) {
                    if (array && key.match(/^\d+$/)) {
                        return str;
                    }
                    name = JSON.stringify("" + key);
                    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        name = name.substr(1, name.length - 2);
                        name = ctx.stylize(name, "name");
                    } else {
                        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        name = ctx.stylize(name, "string");
                    }
                }
                return name + ": " + str;
            }
            function reduceToSingleString(output, base, braces) {
                var numLinesEst = 0;
                var length = output.reduce(function(prev, cur) {
                    numLinesEst++;
                    if (cur.indexOf("\n") >= 0) numLinesEst++;
                    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (length > 60) {
                    return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
                }
                return braces[0] + base + " " + output.join(", ") + " " + braces[1];
            }
            function isArray(ar) {
                return Array.isArray(ar);
            }
            exports.isArray = isArray;
            function isBoolean(arg) {
                return typeof arg === "boolean";
            }
            exports.isBoolean = isBoolean;
            function isNull(arg) {
                return arg === null;
            }
            exports.isNull = isNull;
            function isNullOrUndefined(arg) {
                return arg == null;
            }
            exports.isNullOrUndefined = isNullOrUndefined;
            function isNumber(arg) {
                return typeof arg === "number";
            }
            exports.isNumber = isNumber;
            function isString(arg) {
                return typeof arg === "string";
            }
            exports.isString = isString;
            function isSymbol(arg) {
                return typeof arg === "symbol";
            }
            exports.isSymbol = isSymbol;
            function isUndefined(arg) {
                return arg === void 0;
            }
            exports.isUndefined = isUndefined;
            function isRegExp(re) {
                return isObject(re) && objectToString(re) === "[object RegExp]";
            }
            exports.isRegExp = isRegExp;
            function isObject(arg) {
                return typeof arg === "object" && arg !== null;
            }
            exports.isObject = isObject;
            function isDate(d) {
                return isObject(d) && objectToString(d) === "[object Date]";
            }
            exports.isDate = isDate;
            function isError(e) {
                return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
            }
            exports.isError = isError;
            function isFunction(arg) {
                return typeof arg === "function";
            }
            exports.isFunction = isFunction;
            function isPrimitive(arg) {
                return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
            }
            exports.isPrimitive = isPrimitive;
            exports.isBuffer = __webpack_require__("../node_modules/util/support/isBufferBrowser.js");
            function objectToString(o) {
                return Object.prototype.toString.call(o);
            }
            function pad(n) {
                return n < 10 ? "0" + n.toString(10) : n.toString(10);
            }
            var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            function timestamp() {
                var d = new Date();
                var time = [ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()) ].join(":");
                return [ d.getDate(), months[d.getMonth()], time ].join(" ");
            }
            exports.log = function() {
                console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
            };
            exports.inherits = __webpack_require__("../node_modules/inherits/inherits_browser.js");
            exports._extend = function(origin, add) {
                if (!add || !isObject(add)) return origin;
                var keys = Object.keys(add);
                var i = keys.length;
                while (i--) {
                    origin[keys[i]] = add[keys[i]];
                }
                return origin;
            };
            function hasOwnProperty(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            }
        }).call(exports, __webpack_require__("../node_modules/webpack/buildin/global.js"), __webpack_require__("../node_modules/console-browserify/index.js"));
    },
    "../node_modules/webpack/buildin/global.js": function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            if (typeof window === "object") g = window;
        }
        module.exports = g;
    },
    "../node_modules/webpack/buildin/module.js": function(module, exports) {
        module.exports = function(module) {
            if (!module.webpackPolyfill) {
                module.deprecate = function() {};
                module.paths = [];
                if (!module.children) module.children = [];
                Object.defineProperty(module, "loaded", {
                    enumerable: true,
                    get: function() {
                        return module.l;
                    }
                });
                Object.defineProperty(module, "id", {
                    enumerable: true,
                    get: function() {
                        return module.i;
                    }
                });
                module.webpackPolyfill = 1;
            }
            return module;
        };
    },
    "../node_modules/whatwg-fetch/fetch.js": function(module, exports) {
        (function(self) {
            if (self.fetch) {
                return;
            }
            var support = {
                searchParams: "URLSearchParams" in self,
                iterable: "Symbol" in self && "iterator" in Symbol,
                blob: "FileReader" in self && "Blob" in self && function() {
                    try {
                        new Blob();
                        return true;
                    } catch (e) {
                        return false;
                    }
                }(),
                formData: "FormData" in self,
                arrayBuffer: "ArrayBuffer" in self
            };
            if (support.arrayBuffer) {
                var viewClasses = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ];
                var isDataView = function(obj) {
                    return obj && DataView.prototype.isPrototypeOf(obj);
                };
                var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                };
            }
            function normalizeName(name) {
                if (typeof name !== "string") {
                    name = String(name);
                }
                if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                    throw new TypeError("Invalid character in header field name");
                }
                return name.toLowerCase();
            }
            function normalizeValue(value) {
                if (typeof value !== "string") {
                    value = String(value);
                }
                return value;
            }
            function iteratorFor(items) {
                var iterator = {
                    next: function() {
                        var value = items.shift();
                        return {
                            done: value === undefined,
                            value: value
                        };
                    }
                };
                if (support.iterable) {
                    iterator[Symbol.iterator] = function() {
                        return iterator;
                    };
                }
                return iterator;
            }
            function Headers(headers) {
                this.map = {};
                if (headers instanceof Headers) {
                    headers.forEach(function(value, name) {
                        this.append(name, value);
                    }, this);
                } else if (Array.isArray(headers)) {
                    headers.forEach(function(header) {
                        this.append(header[0], header[1]);
                    }, this);
                } else if (headers) {
                    Object.getOwnPropertyNames(headers).forEach(function(name) {
                        this.append(name, headers[name]);
                    }, this);
                }
            }
            Headers.prototype.append = function(name, value) {
                name = normalizeName(name);
                value = normalizeValue(value);
                var oldValue = this.map[name];
                this.map[name] = oldValue ? oldValue + "," + value : value;
            };
            Headers.prototype["delete"] = function(name) {
                delete this.map[normalizeName(name)];
            };
            Headers.prototype.get = function(name) {
                name = normalizeName(name);
                return this.has(name) ? this.map[name] : null;
            };
            Headers.prototype.has = function(name) {
                return this.map.hasOwnProperty(normalizeName(name));
            };
            Headers.prototype.set = function(name, value) {
                this.map[normalizeName(name)] = normalizeValue(value);
            };
            Headers.prototype.forEach = function(callback, thisArg) {
                for (var name in this.map) {
                    if (this.map.hasOwnProperty(name)) {
                        callback.call(thisArg, this.map[name], name, this);
                    }
                }
            };
            Headers.prototype.keys = function() {
                var items = [];
                this.forEach(function(value, name) {
                    items.push(name);
                });
                return iteratorFor(items);
            };
            Headers.prototype.values = function() {
                var items = [];
                this.forEach(function(value) {
                    items.push(value);
                });
                return iteratorFor(items);
            };
            Headers.prototype.entries = function() {
                var items = [];
                this.forEach(function(value, name) {
                    items.push([ name, value ]);
                });
                return iteratorFor(items);
            };
            if (support.iterable) {
                Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
            }
            function consumed(body) {
                if (body.bodyUsed) {
                    return Promise.reject(new TypeError("Already read"));
                }
                body.bodyUsed = true;
            }
            function fileReaderReady(reader) {
                return new Promise(function(resolve, reject) {
                    reader.onload = function() {
                        resolve(reader.result);
                    };
                    reader.onerror = function() {
                        reject(reader.error);
                    };
                });
            }
            function readBlobAsArrayBuffer(blob) {
                var reader = new FileReader();
                var promise = fileReaderReady(reader);
                reader.readAsArrayBuffer(blob);
                return promise;
            }
            function readBlobAsText(blob) {
                var reader = new FileReader();
                var promise = fileReaderReady(reader);
                reader.readAsText(blob);
                return promise;
            }
            function readArrayBufferAsText(buf) {
                var view = new Uint8Array(buf);
                var chars = new Array(view.length);
                for (var i = 0; i < view.length; i++) {
                    chars[i] = String.fromCharCode(view[i]);
                }
                return chars.join("");
            }
            function bufferClone(buf) {
                if (buf.slice) {
                    return buf.slice(0);
                } else {
                    var view = new Uint8Array(buf.byteLength);
                    view.set(new Uint8Array(buf));
                    return view.buffer;
                }
            }
            function Body() {
                this.bodyUsed = false;
                this._initBody = function(body) {
                    this._bodyInit = body;
                    if (!body) {
                        this._bodyText = "";
                    } else if (typeof body === "string") {
                        this._bodyText = body;
                    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                        this._bodyBlob = body;
                    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                        this._bodyFormData = body;
                    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                        this._bodyText = body.toString();
                    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                        this._bodyArrayBuffer = bufferClone(body.buffer);
                        this._bodyInit = new Blob([ this._bodyArrayBuffer ]);
                    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                        this._bodyArrayBuffer = bufferClone(body);
                    } else {
                        throw new Error("unsupported BodyInit type");
                    }
                    if (!this.headers.get("content-type")) {
                        if (typeof body === "string") {
                            this.headers.set("content-type", "text/plain;charset=UTF-8");
                        } else if (this._bodyBlob && this._bodyBlob.type) {
                            this.headers.set("content-type", this._bodyBlob.type);
                        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                            this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                        }
                    }
                };
                if (support.blob) {
                    this.blob = function() {
                        var rejected = consumed(this);
                        if (rejected) {
                            return rejected;
                        }
                        if (this._bodyBlob) {
                            return Promise.resolve(this._bodyBlob);
                        } else if (this._bodyArrayBuffer) {
                            return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
                        } else if (this._bodyFormData) {
                            throw new Error("could not read FormData body as blob");
                        } else {
                            return Promise.resolve(new Blob([ this._bodyText ]));
                        }
                    };
                    this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                        } else {
                            return this.blob().then(readBlobAsArrayBuffer);
                        }
                    };
                }
                this.text = function() {
                    var rejected = consumed(this);
                    if (rejected) {
                        return rejected;
                    }
                    if (this._bodyBlob) {
                        return readBlobAsText(this._bodyBlob);
                    } else if (this._bodyArrayBuffer) {
                        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                    } else if (this._bodyFormData) {
                        throw new Error("could not read FormData body as text");
                    } else {
                        return Promise.resolve(this._bodyText);
                    }
                };
                if (support.formData) {
                    this.formData = function() {
                        return this.text().then(decode);
                    };
                }
                this.json = function() {
                    return this.text().then(JSON.parse);
                };
                return this;
            }
            var methods = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
            function normalizeMethod(method) {
                var upcased = method.toUpperCase();
                return methods.indexOf(upcased) > -1 ? upcased : method;
            }
            function Request(input, options) {
                options = options || {};
                var body = options.body;
                if (input instanceof Request) {
                    if (input.bodyUsed) {
                        throw new TypeError("Already read");
                    }
                    this.url = input.url;
                    this.credentials = input.credentials;
                    if (!options.headers) {
                        this.headers = new Headers(input.headers);
                    }
                    this.method = input.method;
                    this.mode = input.mode;
                    if (!body && input._bodyInit != null) {
                        body = input._bodyInit;
                        input.bodyUsed = true;
                    }
                } else {
                    this.url = String(input);
                }
                this.credentials = options.credentials || this.credentials || "omit";
                if (options.headers || !this.headers) {
                    this.headers = new Headers(options.headers);
                }
                this.method = normalizeMethod(options.method || this.method || "GET");
                this.mode = options.mode || this.mode || null;
                this.referrer = null;
                if ((this.method === "GET" || this.method === "HEAD") && body) {
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                }
                this._initBody(body);
            }
            Request.prototype.clone = function() {
                return new Request(this, {
                    body: this._bodyInit
                });
            };
            function decode(body) {
                var form = new FormData();
                body.trim().split("&").forEach(function(bytes) {
                    if (bytes) {
                        var split = bytes.split("=");
                        var name = split.shift().replace(/\+/g, " ");
                        var value = split.join("=").replace(/\+/g, " ");
                        form.append(decodeURIComponent(name), decodeURIComponent(value));
                    }
                });
                return form;
            }
            function parseHeaders(rawHeaders) {
                var headers = new Headers();
                var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
                preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                    var parts = line.split(":");
                    var key = parts.shift().trim();
                    if (key) {
                        var value = parts.join(":").trim();
                        headers.append(key, value);
                    }
                });
                return headers;
            }
            Body.call(Request.prototype);
            function Response(bodyInit, options) {
                if (!options) {
                    options = {};
                }
                this.type = "default";
                this.status = options.status === undefined ? 200 : options.status;
                this.ok = this.status >= 200 && this.status < 300;
                this.statusText = "statusText" in options ? options.statusText : "OK";
                this.headers = new Headers(options.headers);
                this.url = options.url || "";
                this._initBody(bodyInit);
            }
            Body.call(Response.prototype);
            Response.prototype.clone = function() {
                return new Response(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Headers(this.headers),
                    url: this.url
                });
            };
            Response.error = function() {
                var response = new Response(null, {
                    status: 0,
                    statusText: ""
                });
                response.type = "error";
                return response;
            };
            var redirectStatuses = [ 301, 302, 303, 307, 308 ];
            Response.redirect = function(url, status) {
                if (redirectStatuses.indexOf(status) === -1) {
                    throw new RangeError("Invalid status code");
                }
                return new Response(null, {
                    status: status,
                    headers: {
                        location: url
                    }
                });
            };
            self.Headers = Headers;
            self.Request = Request;
            self.Response = Response;
            self.fetch = function(input, init) {
                return new Promise(function(resolve, reject) {
                    var request = new Request(input, init);
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        var options = {
                            status: xhr.status,
                            statusText: xhr.statusText,
                            headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                        };
                        options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                        var body = "response" in xhr ? xhr.response : xhr.responseText;
                        resolve(new Response(body, options));
                    };
                    xhr.onerror = function() {
                        reject(new TypeError("Network request failed"));
                    };
                    xhr.ontimeout = function() {
                        reject(new TypeError("Network request failed"));
                    };
                    xhr.open(request.method, request.url, true);
                    if (request.credentials === "include") {
                        xhr.withCredentials = true;
                    } else if (request.credentials === "omit") {
                        xhr.withCredentials = false;
                    }
                    if ("responseType" in xhr && support.blob) {
                        xhr.responseType = "blob";
                    }
                    request.headers.forEach(function(value, name) {
                        xhr.setRequestHeader(name, value);
                    });
                    xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
                });
            };
            self.fetch.polyfill = true;
        })(typeof self !== "undefined" ? self : this);
    },
    "../node_modules/xo-buttonjs/button/util/get.js": function(module, exports) {
        exports.__esModule = true;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var isObjectOrArray = exports.isObjectOrArray = function isObjectOrArray(value) {
            return value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value instanceof Object;
        };
        var get = exports.get = function get(item, path, def) {
            if (!path) {
                return def;
            }
            var splitPath = path.split(".");
            for (var i = 0; i < splitPath.length; i++) {
                if (isObjectOrArray(item)) {
                    item = item[splitPath[i]];
                } else {
                    return def;
                }
            }
            return item === undefined ? def : item;
        };
    },
    "../node_modules/xo-buttonjs/public/js/button/api.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.$buttonFundingApi = exports.$localeApi = exports.$orderApi = exports.$paymentApi = exports.$checkoutSessionApi = exports.$checkoutCartApi = exports.$checkoutAppDataApi = exports.$authApi = undefined;
        exports.getLocale = getLocale;
        exports.getAuth = getAuth;
        exports.getButtonFunding = getButtonFunding;
        exports.getPayment = getPayment;
        exports.patchPayment = patchPayment;
        exports.executePayment = executePayment;
        exports.getOrder = getOrder;
        exports.captureOrder = captureOrder;
        exports.authorizeOrder = authorizeOrder;
        exports.mapToToken = mapToToken;
        exports.getCheckoutAppData = getCheckoutAppData;
        exports.getCheckoutCart = getCheckoutCart;
        var _api = __webpack_require__("../node_modules/squid-core/dist/api.js");
        var _util = __webpack_require__("../node_modules/squid-core/dist/util.js");
        var _config = __webpack_require__("../node_modules/squid-core/dist/config.js");
        var $authApi = exports.$authApi = new _api.$Api({
            uri: "/api/auth"
        });
        var $checkoutAppDataApi = exports.$checkoutAppDataApi = new _api.$Api({
            uri: "/api/checkout/:id/appData"
        });
        var $checkoutCartApi = exports.$checkoutCartApi = new _api.$Api({
            uri: "/api/checkout/:id/cart"
        });
        var $checkoutSessionApi = exports.$checkoutSessionApi = new _api.$Api({
            uri: "/api/checkout/:id/session"
        });
        var $paymentApi = exports.$paymentApi = new _api.$Api({
            uri: "/api/payment/:id"
        });
        var $orderApi = exports.$orderApi = new _api.$Api({
            uri: "/api/order/:id"
        });
        var $localeApi = exports.$localeApi = new _api.$Api({
            uri: "/api/locale"
        });
        var $buttonFundingApi = exports.$buttonFundingApi = new _api.$Api({
            uri: "/api/button/funding"
        });
        function getLocale() {
            return $localeApi.retrieve({
                params: {
                    ipCountry: _config.$meta.ipcountry,
                    localeTestUrlParam: _util.$util.param("locale.test"),
                    countryParam: _util.$util.param("country.x"),
                    localeParam: _util.$util.param("locale.x")
                }
            }).then(function(res) {
                return res.data;
            });
        }
        function getAuth() {
            return $authApi.retrieve().then(function(res) {
                return res.data;
            });
        }
        function getButtonFunding() {
            return getLocale().then(function(locale) {
                return $buttonFundingApi.retrieve({
                    params: {
                        country: locale.country,
                        ip: window && window.meta && window.meta.ipaddress,
                        domain: window && window.xprops && window.xprops.domain,
                        buttonSessionID: window && window.xprops && window.xprops.buttonSessionID
                    }
                }).then(function(res) {
                    return res.data;
                });
            });
        }
        function getPayment(paymentID) {
            return $paymentApi.retrieve({
                model: {
                    id: paymentID
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Get payment failed");
                }
                return res.data;
            });
        }
        function patchPayment(paymentID, patch) {
            return $paymentApi.action("patch", {
                model: {
                    id: paymentID
                },
                data: {
                    patch: patch
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Patch payment failed");
                }
                return res.data;
            });
        }
        function executePayment(paymentID, payerID) {
            return $paymentApi.action("execute", {
                model: {
                    id: paymentID
                },
                data: {
                    payer_id: payerID
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Execute payment failed");
                }
                return res.data;
            });
        }
        function getOrder(orderID) {
            return $orderApi.retrieve({
                model: {
                    id: orderID
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Get order failed");
                }
                return res.data;
            });
        }
        function captureOrder(orderID) {
            return $orderApi.action("capture", {
                model: {
                    id: orderID
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Capture order failed");
                }
                return res.data;
            });
        }
        function authorizeOrder(orderID) {
            return $orderApi.action("authorize", {
                model: {
                    id: orderID
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Authorize order failed");
                }
                return res.data;
            });
        }
        function mapToToken(id) {
            return $paymentApi.action("ectoken", {
                model: {
                    id: id
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Map payment failed");
                }
                return res.data.token;
            });
        }
        function getCheckoutAppData(token) {
            return $checkoutAppDataApi.retrieve({
                model: {
                    id: token
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Get payment failed");
                }
                return res.data;
            });
        }
        function getCheckoutCart(token) {
            return $checkoutCartApi.retrieve({
                model: {
                    id: token
                }
            }).then(function(res) {
                if (res.ack !== "success") {
                    throw new Error("Get payment failed");
                }
                return res.data;
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/button.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.setupButton = setupButton;
        exports.setup = setup;
        var _paypalSdkConstants = __webpack_require__("../node_modules/paypal-sdk-constants/index.js");
        var _inlineGuest = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/index.js");
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var _lightbox = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/lightbox.js");
        var _locale = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/locale.js");
        var _login = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/login.js");
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var _checkout = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/checkout.js");
        var _api = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/api.js");
        var _attachClickEvent = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util/attachClickEvent.js");
        var _paymentRequest = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/paymentRequest.js");
        var _user = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/user.js");
        var _promise = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/promise.js");
        var _promiseRetry = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/promiseRetry.js");
        var _promiseRetry2 = _interopRequireDefault(_promiseRetry);
        var _logger = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/logger.js");
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function clickButton(event, _ref) {
            var _ref$fundingSource = _ref.fundingSource, fundingSource = _ref$fundingSource === undefined ? "paypal" : _ref$fundingSource, card = _ref.card;
            event.preventDefault();
            event.stopPropagation();
            var buttonEl = event.target;
            var buttonSize = buttonEl.getAttribute("data-size");
            var buttonLayout = buttonEl.getAttribute("data-layout");
            if ((0, _login.shouldPrefetchLogin)()) {
                (0, _lightbox.enableLightbox)();
                var accessTokenGetter = (0, _login.getAccessToken)();
                accessTokenGetter.then(function(accessToken) {
                    (0, _user.persistAccessToken)(accessToken);
                });
                return (0, _checkout.renderCheckout)({
                    accessToken: function accessToken() {
                        return accessTokenGetter;
                    },
                    onDisplay: function onDisplay() {
                        return accessTokenGetter;
                    }
                });
            }
            if (window.xprops.onClick) {
                window.xprops.onClick({
                    fundingSource: fundingSource,
                    card: card
                });
            }
            if (!(0, _inlineGuest.shouldEnableInlineGuest)(buttonEl)) {
                return (0, _checkout.renderCheckout)({
                    fundingSource: fundingSource
                });
            }
            if (!(card || fundingSource === _paypalSdkConstants.FUNDING.CARD)) {
                return (0, _checkout.renderCheckout)({
                    fundingSource: fundingSource
                });
            } else {
                if (card === _paypalSdkConstants.CARD.CUP) {
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_COLLAPSE
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_CLEAR
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.BUTTONS_RESET
                    });
                    return (0, _checkout.renderCheckout)({
                        fundingSource: fundingSource
                    });
                }
                var _getState = (0, _inlineGuest.getState)(), currentCardType = _getState.currentCardType, isZomboRendered = _getState.isZomboRendered;
                if (!card) {
                    return;
                }
                if ((0, _inlineGuest.isSubmitting)()) {
                    return;
                }
                if (currentCardType !== card) {
                    (0, _inlineGuest.changeCardTypeTo)(card);
                    (0, _inlineGuest.expand)();
                    (0, _inlineGuest.dispatch)(_inlineGuest.clearFormAction);
                }
                if (isZomboRendered) {
                    return;
                }
                return window.xprops.payment().then(function(paymentToken) {
                    return (0, _promiseRetry2["default"])(function() {
                        return (0, _paymentRequest.guestEligibilityCheck)({
                            token: paymentToken
                        });
                    }).then(function(res) {
                        return (0, _get.get)(res, "data.checkoutSession.flags", {});
                    }).then(function(_ref2) {
                        var isHostedFieldsAllowed = _ref2.isHostedFieldsAllowed;
                        (0, _logger.track)({
                            state_name: "checkoutjs_inline_guest",
                            transition_name: "process_checking_inline_guest_eligibility",
                            inline_guest_enabled: isHostedFieldsAllowed ? 1 : 0
                        });
                        (0, _logger.info)("inline_guest_eligibility", JSON.stringify({
                            inlineGuestEnable: isHostedFieldsAllowed,
                            isInlneGuestCookied: _inlineGuest.isZomboCookieEnabled,
                            spbLayout: buttonLayout,
                            spbSize: buttonSize,
                            inlineGuestPXP: (0, _inlineGuest.inlineGuestPXPEnabled)()
                        }));
                        (0, _logger.flush)();
                        var state = (0, _inlineGuest.getState)();
                        if (isHostedFieldsAllowed) {
                            if (!state.isZomboRendered) {
                                (0, _inlineGuest.setState)({
                                    isZomboRendered: true
                                });
                                var treatments = (0, _get.get)(window.pre, "inlineGuest.res.data.treatments") || [];
                                (0, _logger.track)({
                                    state_name: "checkoutjs_inline_guest",
                                    transition_name: "process_pxp_checkoutjs_inline_guest",
                                    pxp_trtmnt_id: treatments.map(function(t) {
                                        return t.treatment_id;
                                    }).join(":"),
                                    pxp_id: treatments.map(function(t) {
                                        return t.experiment_id;
                                    }).join(":")
                                });
                                (0, _logger.info)("inline_guest_checkoutjs_render_inline_guest");
                                (0, _logger.flush)();
                                return (0, _inlineGuest.renderCardExperience)({
                                    token: paymentToken,
                                    card: card,
                                    onEvent: _inlineGuest.onEvent,
                                    getState: _inlineGuest.getState
                                });
                            }
                        } else {
                            (0, _logger.info)("inline_guest_checkoutjs_render_go_to_xoon_button");
                            (0, _inlineGuest.renderGoToXoon)({
                                paymentToken: paymentToken
                            });
                        }
                    });
                })["catch"](function(err) {
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_COLLAPSE
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_CLEAR
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.BUTTONS_RESET
                    });
                    (0, _logger.error)("inline_guest_buttonjs_init_error", {
                        err: err.stack ? err.stack : err.toString()
                    });
                    window.xprops.onError(err);
                });
            }
        }
        function setupButton() {
            if (window.name && window.name.indexOf("__prerender") === 0) {
                if (window.console && window.console.warn) {
                    window.console.warn("Button setup inside prerender");
                }
                return;
            }
            (0, _promise.usePayPalPromise)();
            (0, _login.setupLoginPreRender)();
            (0, _util.querySelectorAll)("#paypal-other-options").forEach(function(button) {
                var onClick = function onClick() {
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_COLLAPSE
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.CARD_FORM_CLEAR
                    });
                    (0, _inlineGuest.onEvent)({
                        type: _inlineGuest.ACTIONS.BUTTONS_RESET
                    });
                };
                (0, _attachClickEvent.attachClickEventToElement)(button, onClick);
            });
            (0, _util.querySelectorAll)(".paypal-button").forEach(function(button) {
                (0, _attachClickEvent.attachClickEventToElement)(button, function(event) {
                    var fundingSource = button.getAttribute("data-funding-source");
                    return clickButton(event, {
                        fundingSource: fundingSource
                    });
                });
            });
            (0, _util.querySelectorAll)(".paypal-button-card").forEach(function(button) {
                (0, _attachClickEvent.attachClickEventToElement)(button, function(event) {
                    var fundingSource = button.getAttribute("data-funding-source");
                    var card = button.getAttribute("data-card");
                    return clickButton(event, {
                        fundingSource: fundingSource,
                        card: card
                    });
                });
            });
            return window.paypal.Promise.all([ (0, _lightbox.detectLightboxEligibility)(), (0, 
            _locale.determineLocale)().then(function(locale) {
                window.paypal.config.locale.country = locale.country;
                window.paypal.config.locale.lang = locale.lang;
            }), (0, _api.getButtonFunding)().then(function(funding) {
                if (window.xprops.funding && window.xprops.funding.remember && funding.eligible.length) {
                    window.xprops.funding.remember(funding.eligible);
                }
            }) ]);
        }
        function setup() {
            if (!window.paypal && (!window.name || window.name.indexOf("xcomponent__ppbutton") === -1)) {
                return;
            }
            return window.paypal.Promise["try"](function() {
                return setupButton();
            })["catch"](function(err) {
                window.paypal.logger.error("xo_buttonjs_bootstrap_err", {
                    err: err.stack ? err.stack : err.toString()
                });
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/checkout.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.renderCheckout = renderCheckout;
        var _lightbox = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/lightbox.js");
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var _api = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/api.js");
        var _user = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/user.js");
        function buildActions(checkout, data, actions) {
            var redirect = function redirect(win, url) {
                return window.paypal.Promise.all([ (0, _util.redirect)(win || window.top, url || data.returnUrl), actions.close() ]);
            };
            var restartFlow = function restartFlow() {
                return checkout.close().then(function() {
                    (0, _lightbox.enableLightbox)();
                    renderCheckout({
                        payment: function payment() {
                            return window.paypal.Promise.resolve(data.paymentToken);
                        }
                    });
                    return new window.paypal.Promise(_util.noop);
                });
            };
            var handleExecuteError = function handleExecuteError(err) {
                if (err && err.message === "CC_PROCESSOR_DECLINED") {
                    return restartFlow();
                }
                if (err && err.message === "INSTRUMENT_DECLINED") {
                    return restartFlow();
                }
                throw new Error("Payment could not be executed");
            };
            var handlePatchError = function handlePatchError() {
                throw new Error("Payment could not be patched, error occured in API call.");
            };
            var paymentGet = (0, _util.memoize)(function() {
                if (!data.paymentID) {
                    throw new Error("Client side payment get is only available for REST based transactions");
                }
                return (0, _api.getPayment)(data.paymentID);
            });
            var paymentPatch = function paymentPatch(patch) {
                if (!data.paymentID) {
                    throw new Error("Client side payment patch is only available for REST based transactions");
                }
                return (0, _api.patchPayment)(data.paymentID, patch)["catch"](handlePatchError);
            };
            var paymentExecute = (0, _util.memoize)(function() {
                if (!data.paymentID) {
                    throw new Error("Client side payment execute is only available for REST based transactions");
                }
                checkout.closeComponent();
                return (0, _api.executePayment)(data.paymentID, data.payerID)["catch"](handleExecuteError)["finally"](paymentGet.reset);
            });
            var orderGet = (0, _util.memoize)(function() {
                if (!data.orderID) {
                    throw new Error("Client side order get is only available for REST based transactions");
                }
                return (0, _api.getOrder)(data.orderID);
            });
            var orderCapture = (0, _util.memoize)(function() {
                if (!data.orderID) {
                    throw new Error("Client side order capture is only available for REST based transactions");
                }
                checkout.closeComponent();
                return (0, _api.captureOrder)(data.orderID)["catch"](handleExecuteError)["finally"](orderGet.reset);
            });
            var orderAuthorize = (0, _util.memoize)(function() {
                if (!data.orderID) {
                    throw new Error("Client side order capture is only available for REST based transactions");
                }
                checkout.closeComponent();
                return (0, _api.authorizeOrder)(data.orderID)["catch"](handleExecuteError)["finally"](orderGet.reset);
            });
            return _extends({
                payment: {
                    execute: paymentExecute,
                    patch: paymentPatch,
                    get: paymentGet
                },
                order: {
                    capture: orderCapture,
                    authorize: orderAuthorize,
                    get: orderGet
                },
                redirect: redirect,
                restart: restartFlow
            }, actions);
        }
        function buildShippingChangeActions(checkout, data, actions) {
            var handlePatchError = function handlePatchError() {
                throw new Error("Payment could not be patched, error occured in API call.");
            };
            var paymentPatch = function paymentPatch(patch) {
                if (!data.paymentID) {
                    throw new Error("Client side payment patch is only available for REST based transactions");
                }
                return (0, _api.patchPayment)(data.paymentID, patch)["catch"](handlePatchError);
            };
            return _extends({}, actions, {
                payment: {
                    patch: paymentPatch
                }
            });
        }
        function buildCancelActions(checkout, data, actions) {
            var redirect = function redirect(win, url) {
                return window.paypal.Promise.all([ (0, _util.redirect)(win || window.top, url || data.cancelUrl), actions.close() ]).then(_util.noop);
            };
            return _extends({}, actions, {
                redirect: redirect
            });
        }
        function getCancelData(payment, data) {
            return window.paypal.Promise["try"](function() {
                return data.paymentToken || payment().then(function(id) {
                    return (0, _api.mapToToken)(id);
                });
            }).then(function(paymentToken) {
                return window.paypal.Promise.all([ (0, _api.getCheckoutAppData)(paymentToken), (0, 
                _api.getCheckoutCart)(paymentToken) ]).then(function(_ref) {
                    var appData = _ref[0], cart = _ref[1];
                    var paymentID = appData.payment_id;
                    var cancelUrl = appData.urls.cancel_url;
                    var intent = cart.payment_action;
                    var billingID = paymentToken;
                    var billingToken = cart.billing && cart.billing.ba_token;
                    return {
                        paymentToken: paymentToken,
                        paymentID: paymentID,
                        intent: intent,
                        billingID: billingID,
                        billingToken: billingToken,
                        cancelUrl: cancelUrl
                    };
                });
            });
        }
        function buildCheckoutProps(props) {
            var payment = (0, _util.memoize)(props.payment || window.xprops.payment);
            var builtProps = _extends({
                payment: payment,
                locale: window.xprops.locale,
                commit: window.xprops.commit,
                onError: window.xprops.onError,
                onAuthorize: function onAuthorize(data, actions) {
                    actions = buildActions(this, data, actions);
                    return window.xprops.onAuthorize(data, actions)["catch"](function(err) {
                        return window.xchild.error(err);
                    });
                },
                onCancel: function onCancel(data, actions) {
                    var _this = this;
                    return window.paypal.Promise["try"](function() {
                        return getCancelData(payment, data);
                    }).then(function(cancelData) {
                        var cancelActions = buildCancelActions(_this, cancelData, actions);
                        return window.xprops.onCancel(cancelData, cancelActions);
                    })["catch"](function(err) {
                        return window.xchild.error(err);
                    });
                },
                onAuth: function onAuth(_ref2) {
                    var accessToken = _ref2.accessToken;
                    (0, _user.persistAccessToken)(accessToken);
                    (0, _lightbox.detectLightboxEligibility)();
                },
                style: {
                    overlayColor: window.xprops.style.overlayColor
                }
            }, props);
            if (window.xprops.onShippingChange) {
                builtProps = _extends({}, builtProps, {
                    onShippingChange: function onShippingChange(data, actions) {
                        actions = buildShippingChangeActions(this, data, actions);
                        return window.xprops.onShippingChange(data, actions);
                    }
                });
            }
            return builtProps;
        }
        function renderCheckout() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            window.paypal.Checkout.renderTo(window.top, buildCheckoutProps(props))["catch"](_util.noop);
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/constants.js": function(module, exports) {
        exports.__esModule = true;
        var ACCESS_TOKEN_HEADER = exports.ACCESS_TOKEN_HEADER = "x-paypal-internal-euat";
        var KEY_CODES = exports.KEY_CODES = {
            ENTER: 13
        };
    },
    "../node_modules/xo-buttonjs/public/js/button/hacks.js": function(module, exports) {
        try {
            var props = window.paypal.Checkout.props;
            props.style = props.style || {
                type: "object",
                required: false
            };
            props.fundingSource = props.fundingSource || {
                type: "string",
                required: false
            };
        } catch (err) {}
    },
    "../node_modules/xo-buttonjs/public/js/button/index.js": function(module, exports, __webpack_require__) {
        __webpack_require__("../node_modules/xo-buttonjs/public/js/button/hacks.js");
        var _button = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/button.js");
        window.setup = _button.setup;
    },
    "../node_modules/xo-buttonjs/public/js/button/lightbox.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.isLightboxEligible = isLightboxEligible;
        exports.enableLightbox = enableLightbox;
        exports.detectLightboxEligibility = detectLightboxEligibility;
        var _util = __webpack_require__("../node_modules/squid-core/dist/util.js");
        var _user = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/user.js");
        var lightboxEligibilityTimeout = void 0;
        function isLightboxEligible() {
            return window.paypal.Promise.resolve().then(function() {
                if (window.xprops.disableLightbox) {
                    return false;
                }
                if (!_util.$util.cookiesEnabled()) {
                    return false;
                }
                return (0, _user.isLoggedIn)();
            });
        }
        function enableLightbox() {
            if (lightboxEligibilityTimeout) {
                clearTimeout(lightboxEligibilityTimeout);
            }
            lightboxEligibilityTimeout = setTimeout(function() {
                window.paypal.Checkout.contexts.lightbox = false;
                window.paypal.Checkout.contexts.iframe = false;
            }, 5 * 60 * 1e3);
            window.paypal.Checkout.contexts.lightbox = true;
            window.paypal.Checkout.contexts.iframe = true;
        }
        function detectLightboxEligibility() {
            return isLightboxEligible().then(function(eligible) {
                if (eligible) {
                    if (window.xprops.onAuth) {
                        window.xprops.onAuth();
                    }
                }
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/locale.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.determineLocale = determineLocale;
        var _api = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/api.js");
        function determineLocale() {
            return window.paypal.Promise["try"](function() {
                var userLocale = window.xprops.locale;
                if (userLocale) {
                    var _userLocale$split = userLocale.split("_"), lang = _userLocale$split[0], country = _userLocale$split[1];
                    if (!window.paypal.config.locales[country]) {
                        throw new Error("Invalid country: " + country + " for locale " + userLocale);
                    }
                    if (window.paypal.config.locales[country].indexOf(lang) === -1) {
                        throw new Error("Invalid language: " + lang + " for locale " + userLocale);
                    }
                    return {
                        lang: lang,
                        country: country
                    };
                }
                return (0, _api.getLocale)();
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/logger.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.flush = exports.info = exports.error = exports.track = undefined;
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var track = exports.track = window.paypal && window.paypal.logger && window.paypal.logger.track || _util.noop;
        var error = exports.error = window.paypal && window.paypal.logger && window.paypal.logger.error || _util.noop;
        var info = exports.info = window.paypal && window.paypal.logger && window.paypal.logger.info || _util.noop;
        var flush = exports.flush = window.paypal && window.paypal.logger && window.paypal.logger.flush || _util.noop;
    },
    "../node_modules/xo-buttonjs/public/js/button/login.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.shouldPrefetchLogin = shouldPrefetchLogin;
        exports.setupLoginPreRender = setupLoginPreRender;
        exports.getAccessToken = getAccessToken;
        var _user = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/user.js");
        var loginPreRender = void 0;
        function shouldPrefetchLogin() {
            return window.xprops.prefetchLogin;
        }
        function setupLoginPreRender() {
            if (!shouldPrefetchLogin()) {
                return;
            }
            return (0, _user.isLoggedIn)().then(function(loggedIn) {
                if (!loggedIn) {
                    var login = window.paypal.Login.prerender({
                        env: "stage",
                        onAuthenticate: function onAuthenticate() {
                            throw new Error("Called unimplemented onAuthenticate");
                        }
                    });
                    loginPreRender = {
                        render: function render(props) {
                            return login.render(props);
                        },
                        renderTo: function renderTo(win, props) {
                            return login.renderTo(win, props);
                        }
                    };
                    setTimeout(function() {
                        loginPreRender = null;
                    }, 5 * 60 * 1e3);
                }
            });
        }
        function getAccessToken() {
            return new window.paypal.Promise(function(resolve, reject) {
                var LoginComponent = loginPreRender || window.paypal.Login;
                loginPreRender = null;
                LoginComponent.renderTo(window.top, {
                    onAuthenticate: function onAuthenticate(_ref) {
                        var accessToken = _ref.accessToken;
                        resolve(accessToken);
                    },
                    onError: reject
                })["catch"](reject);
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/paymentRequest.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.guestEligibilityCheck = exports.payment = undefined;
        __webpack_require__("../node_modules/whatwg-fetch/fetch.js");
        var networks = [ "amex", "diners", "discover", "jcb", "mastercard", "unionpay", "visa", "mir" ];
        var types = [ "debit", "credit", "prepaid" ];
        var supportedInstruments = [ {
            supportedMethods: networks
        }, {
            supportedMethods: [ "basic-card" ],
            data: {
                supportedNetworks: networks,
                supportedTypes: types
            }
        } ];
        var details = {
            total: {
                label: "Donation",
                amount: {
                    currency: "USD",
                    value: "55.00"
                }
            },
            displayItems: [ {
                label: "Original donation amount",
                amount: {
                    currency: "USD",
                    value: "65.00"
                }
            }, {
                label: "Friends and family discount",
                amount: {
                    currency: "USD",
                    value: "-10.00"
                }
            } ]
        };
        var payment = exports.payment = function payment() {
            return new PaymentRequest(supportedInstruments, details);
        };
        var guestEligibilityCheck = exports.guestEligibilityCheck = function guestEligibilityCheck(_ref) {
            var token = _ref.token;
            var params = {
                operation: "GuestFlowCheck",
                query: 'query GuestFlowCheck { checkoutSession( token: "' + token + '" ) { flags { isHostedFieldsAllowed isGuestEligible }}}',
                variables: null
            };
            var graphqlEndpoint = window.__GRAPHQL_ENDPOINT__ || "https://www.paypal.com/graphql";
            return fetch(graphqlEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }).then(function(res) {
                return res.json();
            })["catch"](function(err) {
                throw err;
            });
        };
    },
    "../node_modules/xo-buttonjs/public/js/button/promise.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.usePayPalPromise = usePayPalPromise;
        var _promise = __webpack_require__("../node_modules/squid-core/dist/promise.js");
        __webpack_require__("../node_modules/squid-core/dist/util.js");
        function usePayPalPromise() {
            _promise.$promise.use(window.paypal.Promise);
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/promiseRetry.js": function(module, exports) {
        exports.__esModule = true;
        function promiseRetry(promiseFactory) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
            var promise = promiseFactory();
            return promise.then(function(result) {
                return result;
            }, function(error) {
                if (time === 0) {
                    throw error;
                }
                return promiseRetry(promiseFactory, time - 1);
            });
        }
        exports["default"] = promiseRetry;
        module.exports = exports["default"];
    },
    "../node_modules/xo-buttonjs/public/js/button/user.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.isLoggedIn = isLoggedIn;
        exports.isCookied = isCookied;
        exports.isRemembered = isRemembered;
        exports.persistAccessToken = persistAccessToken;
        var _api = __webpack_require__("../node_modules/squid-core/dist/api.js");
        var _config = __webpack_require__("../node_modules/squid-core/dist/config.js");
        var _api2 = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/api.js");
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/constants.js");
        function isLoggedIn() {
            return (0, _api2.getAuth)().then(function(auth) {
                if (auth.guest) {
                    return false;
                }
                if (auth.logged_in || auth.remembered || auth.refresh_token) {
                    return true;
                }
                return false;
            });
        }
        function isCookied() {
            return Boolean(_config.$cookies.login_email);
        }
        function isRemembered() {
            return window.paypal.Promise.resolve().then(function() {
                if (isCookied()) {
                    return true;
                }
                return isLoggedIn();
            });
        }
        var lastAccessToken = void 0;
        function persistAccessToken(accessToken) {
            return window.paypal.Promise["try"](function() {
                if (accessToken !== lastAccessToken) {
                    lastAccessToken = accessToken;
                    _api.$Api.addHeader(_constants.ACCESS_TOKEN_HEADER, accessToken);
                    return (0, _api2.getAuth)();
                }
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/util.js": function(module, exports) {
        exports.__esModule = true;
        exports.memoize = memoize;
        exports.querySelectorAll = querySelectorAll;
        exports.noop = noop;
        exports.urlWillRedirectPage = urlWillRedirectPage;
        exports.redirect = redirect;
        function memoize(method) {
            var called = false;
            var result = void 0;
            function memoizeWrapper() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                if (called) {
                    return result;
                }
                called = true;
                result = method.apply(this, arguments);
                return result;
            }
            memoizeWrapper.reset = function() {
                called = false;
            };
            return memoizeWrapper;
        }
        function querySelectorAll(selector) {
            var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
            return Array.prototype.slice.call(doc.querySelectorAll(selector));
        }
        function noop() {}
        function urlWillRedirectPage(url) {
            if (url.indexOf("#") === -1) {
                return true;
            }
            if (url.indexOf("#") === 0) {
                return false;
            }
            if (url.split("#")[0] === window.location.href.split("#")[0]) {
                return false;
            }
            return true;
        }
        function redirect() {
            var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var url = arguments[1];
            return new window.paypal.Promise(function(resolve) {
                setTimeout(function() {
                    win.location = url;
                    if (!urlWillRedirectPage(url)) {
                        resolve();
                    }
                }, 1);
            });
        }
    },
    "../node_modules/xo-buttonjs/public/js/button/util/attachClickEvent.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.attachClickEventToElement = undefined;
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/constants.js");
        var attachClickEventToElement = exports.attachClickEventToElement = function attachClickEventToElement(element, fn) {
            element.addEventListener("touchstart", function() {});
            element.addEventListener("click", fn);
            element.addEventListener("keypress", function(event) {
                if (event.keyCode === _constants.KEY_CODES.ENTER) {
                    return fn(event);
                }
            });
        };
    },
    "../node_modules/xo-buttonjs/public/js/constants.js": function(module, exports) {
        exports.__esModule = true;
        var PAYMENT_EXECUTION_ERROR = exports.PAYMENT_EXECUTION_ERROR = {
            CC_PROCESSOR_DECLINED: "CC_PROCESSOR_DECLINED",
            INSTRUMENT_DECLINED: "INSTRUMENT_DECLINED"
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/billing.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.renderBillingPage = renderBillingPage;
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        function renderBillingPage() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return window.paypal.BillingPage.renderTo(window.top, _extends({
                locale: window.xprops.locale,
                commit: window.xprops.commit,
                on: function on(action) {
                    if (window.xprops.on) {
                        window.xprops.on(action);
                    }
                },
                onError: window.xchild.error
            }, props), "body").then(_util.noop);
        }
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/constants.js": function(module, exports) {
        exports.__esModule = true;
        var BUTTON_MARGINS = exports.BUTTON_MARGINS = {
            large: 14,
            medium: 11,
            small: 5,
            responsive: 11,
            default: 11
        };
        var BUTTON_HEIGHTS = exports.BUTTON_HEIGHTS = {
            large: 45,
            medium: 35,
            small: 25,
            responsive: 35,
            default: 35
        };
        var POWERED_BY_PAYPAL_HEIGHT = exports.POWERED_BY_PAYPAL_HEIGHT = 20;
        var PADDING = exports.PADDING = 30;
        var ACTIONS = exports.ACTIONS = {
            ZIP_CODE_CHANGED: "ZIP_CODE_CHANGED",
            DISPLAY_GO_TO_XOON: "DISPLAY_GO_TO_XOON",
            OPEN_BILLING_ADDRESS: "@BILLING_PAGE/OPEN",
            SUBMIT_BILLING_ADDRESS: "@BILLING_PAGE/SUBMIT",
            SET_CONTENT_HEIGHT: "SET_CONTENT_HEIGHT",
            CARD_TYPE_CHANGED: "CARD_TYPE_CHANGED",
            CARD_FORM_COLLAPSE: "CARD_FORM_COLLAPSE",
            CARD_FORM_EXPAND: "CARD_FORM_EXPAND",
            CARD_FORM_CLEAR: "CARD_FORM_CLEAR",
            BUTTONS_RESET: "BUTTONS_RESET",
            CARD_FORM_RESPONDED_SUCCESS: "CARD_FORM_RESPONDED_SUCCESS",
            CREDIT_FORM_RESET: "@@redux-form/RESET"
        };
        var clearFormAction = exports.clearFormAction = {
            type: "@@redux-form/RESET",
            meta: {
                form: "card_fields"
            }
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/creditCardForm.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.renderGoToXoon = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        exports.renderCardExperience = renderCardExperience;
        var _paypalSdkConstants = __webpack_require__("../node_modules/paypal-sdk-constants/index.js");
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var _user = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/user.js");
        var _api = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/api.js");
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var _checkout = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/checkout.js");
        var _attachClickEvent = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util/attachClickEvent.js");
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/constants.js");
        var _onEvent = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/onEvent.js");
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i];
            }
            return target;
        }
        function buildActions(checkout, data, actions) {
            var handleExecuteError = function handleExecuteError(err) {
                var errorMessage = (0, _get.get)(err, "message");
                var wasCardDeclined = errorMessage === _constants.PAYMENT_EXECUTION_ERROR.CC_PROCESSOR_DECLINED || errorMessage === _constants.PAYMENT_EXECUTION_ERROR.INSTRUMENT_DECLINED;
                (0, _onEvent.expand)();
                return renderGoToXoon({
                    paymentToken: data.paymentID,
                    wasCardDeclined: wasCardDeclined
                });
            };
            var paymentGet = (0, _util.memoize)(function() {
                if (!data.paymentID) {
                    throw new Error("Client side payment get is only available for REST based transactions");
                }
                return (0, _api.getPayment)(data.paymentID);
            });
            var paymentExecute = (0, _util.memoize)(function() {
                if (!data.paymentID) {
                    throw new Error("Client side payment execute is only available for REST based transactions");
                }
                return (0, _api.executePayment)(data.paymentID, data.payerID)["catch"](handleExecuteError)["finally"](paymentGet.reset);
            });
            var orderGet = (0, _util.memoize)(function() {
                if (!data.orderID) {
                    throw new Error("Client side order get is only available for REST based transactions");
                }
                return (0, _api.getOrder)(data.orderID);
            });
            var orderCapture = (0, _util.memoize)(function() {
                if (!data.orderID) {
                    throw new Error("Client side order capture is only available for REST based transactions");
                }
                checkout.closeComponent();
                return (0, _api.captureOrder)(data.orderID)["catch"](handleExecuteError)["finally"](orderGet.reset);
            });
            return _extends({}, actions, {
                payment: {
                    execute: paymentExecute,
                    get: paymentGet
                },
                order: {
                    capture: orderCapture,
                    get: orderGet
                }
            });
        }
        function renderGoToXoon(params) {
            var paymentToken = params.paymentToken, wasCardDeclined = params.wasCardDeclined;
            var zomboEl = document.getElementById("cardExp");
            if (!zomboEl) {
                throw new Error("Inline Guest div not found");
            }
            zomboEl.innerHTML = "";
            var errorMessage = wasCardDeclined ? (0, _get.get)(window, "localizationJSON.cardWasDeclined") : (0, 
            _get.get)(window, "localizationJSON.somethingWentWrong");
            var buttonContent = '\n    <div id="go-to-xoon-error-message"\n        style="\n          font-family: HelveticaNeue-Light,Helvetica Neue Light,helvetica,arial,sans-serif;\n          line-height: 24px;\n          font-size: 18px;\n          color: #000;\n          margin: 10px 0 24px 0;\n          text-align: center;\n        "\n    >' + errorMessage + '</div>\n    <div id="go-to-xoon"\n      style="\n          height: 48px;\n          line-height: 48px;\n          border-radius: 4px;\n          -moz-border-radius: 4px;\n          background-color: #0070BA;\n          border-color: #0070BA;\n          color: #fff;\n          font-size: 15px;\n          user-select: none;\n          text-align: center;\n          font-family: Helvetica Neue,HelveticaNeue,helvetica,arial,sans-serif;\n      "\n    >' + (0, 
            _get.get)(window, "localizationJSON.tryAgain", "Try Again") + "</div>\n    ";
            zomboEl.innerHTML = buttonContent;
            var buttons = document.querySelectorAll("#go-to-xoon");
            if (buttons.length === 0) {
                throw new Error("Cannot find the go to guest checkout button");
            }
            var goToXoonButton = buttons[0];
            (0, _attachClickEvent.attachClickEventToElement)(goToXoonButton, function(event) {
                event.preventDefault();
                event.stopPropagation();
                return (0, _checkout.renderCheckout)(_extends({
                    fundingSource: _paypalSdkConstants.FUNDING.CARD
                }, paymentToken ? {
                    payment: function payment() {
                        return window.paypal.Promise.resolve(paymentToken);
                    }
                } : {}));
            });
            return window.paypal.Promise.resolve();
        }
        function renderCardExperience() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, token = _ref.token, otherProps = _objectWithoutProperties(_ref, [ "token" ]);
            var zomboEl = document.getElementById("cardExp");
            zomboEl.innerHTML = "";
            zomboEl.className = "cardExpOpened";
            window.paypal.Card.dimensions = {
                width: window.innerWidth + "px",
                height: "200px"
            };
            return window.paypal.Card.render(_extends({
                token: token,
                locale: window.xprops.locale,
                commit: window.xprops.commit,
                onAuthorize: function onAuthorize(data, actions) {
                    var newActions = buildActions(this, data, actions);
                    return window.xprops.onAuthorize(data, newActions)["catch"](function(err) {
                        return window.xchild.error(err);
                    });
                },
                onCancel: function onCancel(data) {
                    return window.xprops.onCancel(data, {});
                },
                onAuth: function onAuth(_ref2) {
                    var accessToken = _ref2.accessToken;
                    return (0, _user.persistAccessToken)(accessToken);
                },
                onError: window.xchild.error
            }, otherProps), zomboEl);
        }
        exports.renderGoToXoon = renderGoToXoon;
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/index.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        var _state = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/state.js");
        Object.keys(_state).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _state[key];
                }
            });
        });
        var _onEvent = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/onEvent.js");
        Object.keys(_onEvent).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _onEvent[key];
                }
            });
        });
        var _inlineGuestEligibility = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/inlineGuestEligibility.js");
        Object.keys(_inlineGuestEligibility).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _inlineGuestEligibility[key];
                }
            });
        });
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/constants.js");
        Object.keys(_constants).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _constants[key];
                }
            });
        });
        var _creditCardForm = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/creditCardForm.js");
        Object.keys(_creditCardForm).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _creditCardForm[key];
                }
            });
        });
        var _billing = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/billing.js");
        Object.keys(_billing).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _billing[key];
                }
            });
        });
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/inlineGuestEligibility.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.shouldEnableInlineGuest = exports.inlineGuestPXPEnabled = exports.isZomboCookieEnabled = undefined;
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var isZomboCookieEnabled = exports.isZomboCookieEnabled = function isZomboCookieEnabled() {
            return document.cookie.indexOf("zombo=1") >= 0;
        };
        var inlineGuestPXPEnabled = exports.inlineGuestPXPEnabled = function inlineGuestPXPEnabled() {
            var isEnable = false;
            var treatments = (0, _get.get)(window.pre, "inlineGuest.res.data.treatments") || [];
            treatments.forEach(function(t) {
                if (t.treatment_name === "xo_hermesnodeweb_inline_guest_treatment") {
                    isEnable = true;
                }
            });
            return isEnable;
        };
        var shouldEnableInlineGuest = exports.shouldEnableInlineGuest = function shouldEnableInlineGuest(buttonEl) {
            if (!buttonEl) {
                return false;
            }
            if (!buttonEl.getAttribute) {
                return false;
            }
            var buttonSize = buttonEl.getAttribute("data-size");
            var buttonLayout = buttonEl.getAttribute("data-layout");
            var isButtonEligibleForInlineGuest = buttonSize === "medium" || buttonSize === "large" || buttonSize === "huge";
            var isVerticalLayout = buttonLayout === "vertical";
            if (isButtonEligibleForInlineGuest && isVerticalLayout && (inlineGuestPXPEnabled() || isZomboCookieEnabled())) {
                return true;
            }
            return false;
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/onEvent.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.onEvent = exports.collapse = exports.expand = exports.changeCardTypeTo = exports.dispatch = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var _utils = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/utils/index.js");
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/constants.js");
        var _billing = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/billing.js");
        var _creditCardForm = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/creditCardForm.js");
        var _index = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/index.js");
        var buttonsIframeHeight = window.innerHeight;
        var buttonsIframeWidth = window.innerWidth;
        var dispatch = exports.dispatch = function dispatch(action) {
            if (action && window.xprops.dispatch) {
                window.xprops.dispatch(action);
            }
        };
        var changeCardTypeTo = exports.changeCardTypeTo = function changeCardTypeTo(cardType) {
            var _getState = (0, _index.getState)(), currentCardType = _getState.currentCardType;
            if (currentCardType === cardType) {
                return;
            }
            (0, _index.setState)({
                currentCardType: cardType
            });
            (0, _utils.disableAllCardTypes)();
            var selectedCardEl = (0, _utils.getCardElementFromCardType)(cardType);
            (0, _utils.enableCard)(selectedCardEl);
        };
        var zomboResizeActions = function zomboResizeActions() {
            var parent = window.xchild;
            var BUTTON_HEIGHT = (0, _utils.getButtonHeight)();
            var collapse = function collapse() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    width: buttonsIframeWidth
                }, width = _ref.width;
                (0, _index.setState)({
                    isExpanded: false
                });
                parent.resize(width, buttonsIframeHeight);
            };
            var expand = function expand() {
                var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    width: buttonsIframeWidth
                }, width = _ref2.width;
                var state = (0, _index.getState)();
                (0, _index.setState)({
                    isExpanded: true
                });
                var top = BUTTON_HEIGHT + _constants.PADDING + _constants.POWERED_BY_PAYPAL_HEIGHT;
                parent.resize(width, state.contentHeight + top);
            };
            var toggle = function toggle() {
                var dimenssions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    width: buttonsIframeWidth
                };
                var _getState2 = (0, _index.getState)(), _getState2$isExpanded = _getState2.isExpanded, isExpanded = _getState2$isExpanded === undefined ? false : _getState2$isExpanded;
                if (isExpanded) {
                    collapse(dimenssions);
                    return;
                }
                expand(dimenssions);
            };
            return {
                collapse: collapse,
                expand: expand,
                toggle: toggle
            };
        };
        var expand = exports.expand = function expand(dimenssions) {
            var resizeActions = zomboResizeActions();
            var container = document.getElementById("paypal-animation-container");
            var BUTTON_HEIGHT = (0, _utils.getButtonHeight)();
            var content = document.getElementById("paypal-animation-content");
            if (!content) {
                return;
            }
            var buttonsContainer = document.getElementsByClassName("paypal-button-container")[0];
            var transitionTop = buttonsContainer.clientHeight - BUTTON_HEIGHT - _constants.POWERED_BY_PAYPAL_HEIGHT - _constants.PADDING;
            resizeActions.expand(dimenssions);
            content.style.transform = "translateY(-" + transitionTop + "px)";
            (0, _utils.removeClass)(container, "paypal-animation-container-expanded");
            (0, _utils.addClass)(container, "paypal-animation-container-collapsed");
            var paypalButtons = (0, _util.querySelectorAll)(".paypal-button");
            paypalButtons.forEach(function(button) {
                var isCreditCardButton = button.getAttribute("data-funding-source") !== "card";
                if (isCreditCardButton) {
                    button.style.opacity = 0;
                }
            });
        };
        var collapse = exports.collapse = function collapse(dimenssions) {
            var resizeActions = zomboResizeActions();
            var container = document.getElementById("paypal-animation-container");
            var content = document.getElementById("paypal-animation-content");
            resizeActions.collapse(dimenssions);
            if (!content) {
                return;
            }
            content.style.transform = "translateY(0px)";
            (0, _utils.addClass)(container, "paypal-animation-container-expanded");
            (0, _utils.removeClass)(container, "paypal-animation-container-collapsed");
            var paypalButtons = (0, _util.querySelectorAll)(".paypal-button");
            paypalButtons.forEach(function(button) {
                var isCreditCardButton = button.getAttribute("data-funding-source") !== "card";
                if (isCreditCardButton) {
                    button.style.opacity = 1;
                }
            });
        };
        var onEvent = exports.onEvent = function onEvent(event) {
            var _ref3 = event || {}, type = _ref3.type, _ref3$payload = _ref3.payload, payload = _ref3$payload === undefined ? {} : _ref3$payload;
            if (!type) {
                return;
            }
            var state = (0, _index.getState)();
            var _ref4 = state || {}, currentCardType = _ref4.currentCardType, zipCode = _ref4.zipCode;
            if (type === _constants.ACTIONS.ZIP_CODE_CHANGED) {
                (0, _index.setState)({
                    zipCode: payload
                });
                return;
            }
            if (type === _constants.ACTIONS.DISPLAY_GO_TO_XOON) {
                var paymentToken = (0, _get.get)(payload, "paymentToken");
                return (0, _creditCardForm.renderGoToXoon)({
                    paymentToken: paymentToken
                });
            }
            if (type === _constants.ACTIONS.OPEN_BILLING_ADDRESS) {
                var newPayload = {};
                if (payload !== null && (typeof payload === "undefined" ? "undefined" : _typeof(payload)) === "object" && Array.isArray(payload) === false) {
                    newPayload = payload;
                }
                return (0, _billing.renderBillingPage)(_extends({}, newPayload, {
                    env: window.paypal.Button.xprops.env,
                    onEvent: onEvent,
                    prefilledZipCode: zipCode || "",
                    cardType: currentCardType
                }));
            }
            if (type === _constants.ACTIONS.SUBMIT_BILLING_ADDRESS) {
                (0, _index.setState)({
                    billingAddress: payload
                });
                return window.xprops.dispatch({
                    type: type,
                    payload: payload
                });
            }
            if (type === _constants.ACTIONS.SET_CONTENT_HEIGHT) {
                (0, _index.setState)({
                    contentHeight: payload
                });
                return;
            }
            if (type === _constants.ACTIONS.CARD_TYPE_CHANGED) {
                var newCardType = payload;
                if (!(typeof newCardType === "string" || typeof newCardType === "undefined")) {
                    return;
                }
                changeCardTypeTo(newCardType);
                return;
            }
            if (type === _constants.ACTIONS.CARD_FORM_COLLAPSE) {
                collapse();
                return;
            }
            if (type === _constants.ACTIONS.CARD_FORM_EXPAND) {
                expand();
                return;
            }
            if (type === _constants.ACTIONS.CARD_FORM_CLEAR) {
                setTimeout(function() {
                    dispatch(_constants.clearFormAction);
                }, 1e3);
                return;
            }
            if (type === _constants.ACTIONS.BUTTONS_RESET) {
                (0, _utils.enableAllCardTypes)();
                (0, _index.setState)({
                    currentCardType: undefined
                });
                return;
            }
            if (type === _constants.ACTIONS.CARD_FORM_RESPONDED_SUCCESS) {
                onEvent({
                    type: _constants.ACTIONS.CARD_FORM_COLLAPSE
                });
                onEvent({
                    type: _constants.ACTIONS.CARD_FORM_CLEAR
                });
                onEvent({
                    type: _constants.ACTIONS.BUTTONS_RESET
                });
            }
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/state.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.setState = exports.getState = exports.isSubmitting = undefined;
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var DEFAULT_HEIGHT = 300;
        var state = {
            contentHeight: DEFAULT_HEIGHT,
            isZomboRendered: false,
            currentCardType: undefined,
            isExpanded: false,
            zipCode: undefined
        };
        var isSubmitting = exports.isSubmitting = function isSubmitting() {
            if (window.xprops.zomboStore && window.xprops.zomboStore.getState) {
                var store = window.xprops.zomboStore.getState();
                return (0, _get.get)(store, "app.isLoading", false);
            }
            return false;
        };
        var getState = exports.getState = function getState() {
            return state || {};
        };
        var setState = exports.setState = function setState(newState) {
            state = _extends({}, state, newState);
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/utils/getButtonHeight.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.getButtonHeight = undefined;
        var _constants = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/constants.js");
        var _get = __webpack_require__("../node_modules/xo-buttonjs/button/util/get.js");
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        var getButtonHeight = exports.getButtonHeight = function getButtonHeight() {
            var buttons = (0, _util.querySelectorAll)(".paypal-button-number-0");
            if (!buttons || buttons.length === 0) {
                return _constants.BUTTON_HEIGHTS["default"] + _constants.BUTTON_MARGINS["default"];
            }
            var button = buttons[0];
            var size = button.getAttribute("data-size") || "medium";
            var buttonMargin = (0, _get.get)(_constants.BUTTON_MARGINS, size, _constants.BUTTON_MARGINS["default"]);
            var buttonHeight = (0, _get.get)(_constants.BUTTON_HEIGHTS, size, _constants.BUTTON_HEIGHTS["default"]);
            return buttonHeight + buttonMargin;
        };
    },
    "../node_modules/xo-buttonjs/public/js/inlineGuest/utils/index.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        exports.disableAllCardTypes = exports.enableAllCardTypes = exports.disableCard = exports.enableCard = exports.getCardElementFromCardType = exports.getCardClass = undefined;
        var _getButtonHeight = __webpack_require__("../node_modules/xo-buttonjs/public/js/inlineGuest/utils/getButtonHeight.js");
        Object.keys(_getButtonHeight).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _getButtonHeight[key];
                }
            });
        });
        exports.addClass = addClass;
        exports.removeClass = removeClass;
        var _util = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/util.js");
        function addClass(element, className) {
            if (!element) {
                return;
            }
            var classes = element.className.split(" ");
            var i = classes.indexOf(className);
            if (i < 0 && typeof className === "string") {
                classes.push(className);
            }
            element.className = classes.join(" ");
        }
        function removeClass(element, className) {
            if (!element) {
                return;
            }
            var classes = element.className.split(" ");
            var i = classes.indexOf(className);
            if (i >= 0) {
                classes.splice(i, 1);
            }
            element.className = classes.join(" ");
        }
        var cardButtons = (0, _util.querySelectorAll)(".paypal-button-card") || [];
        var CARD_CLASSES = cardButtons.reduce(function(acc, el) {
            var cardType = el.getAttribute("data-card");
            acc[cardType.toUpperCase()] = cardType;
            return acc;
        }, {});
        var getCardClass = exports.getCardClass = function getCardClass(type) {
            return ".paypal-button-card-" + type;
        };
        var getCardElementFromCardType = exports.getCardElementFromCardType = function getCardElementFromCardType(type) {
            var cardClass = getCardClass(type);
            var cardElements = (0, _util.querySelectorAll)(cardClass);
            if (cardElements && cardElements[0]) {
                var imgEl = cardElements[0];
                return imgEl;
            }
            return null;
        };
        var enableCard = exports.enableCard = function enableCard(cardEl) {
            if (cardEl && cardEl.style) {
                cardEl.style.opacity = 1;
            }
        };
        var disableCard = exports.disableCard = function disableCard(cardEl) {
            if (cardEl && cardEl.style) {
                cardEl.style.opacity = .1;
            }
        };
        var enableAllCardTypes = exports.enableAllCardTypes = function enableAllCardTypes() {
            Object.keys(CARD_CLASSES).map(function(k) {
                return CARD_CLASSES[k];
            }).forEach(function(type) {
                var cardEl = getCardElementFromCardType(type);
                enableCard(cardEl);
            });
        };
        var disableAllCardTypes = exports.disableAllCardTypes = function disableAllCardTypes() {
            Object.keys(CARD_CLASSES).map(function(k) {
                return CARD_CLASSES[k];
            }).forEach(function(type) {
                var cardEl = getCardElementFromCardType(type);
                disableCard(cardEl);
            });
        };
    },
    "./js/button/index.js": function(module, exports, __webpack_require__) {
        exports.__esModule = true;
        var _button = __webpack_require__("../node_modules/xo-buttonjs/public/js/button/index.js");
        Object.keys(_button).forEach(function(key) {
            if (key === "default" || key === "__esModule") return;
            Object.defineProperty(exports, key, {
                enumerable: true,
                get: function get() {
                    return _button[key];
                }
            });
        });
    }
});
//# sourceMappingURL=button.js.map