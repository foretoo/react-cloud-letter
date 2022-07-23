import require$$0, { createContext, useContext, useRef, useLayoutEffect } from "react";
const init = {
  every: [],
  words: [],
  spaces: []
};
const cloudContext = createContext(init);
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React = require$$0;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return getComponentNameFromType(init2(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init2 = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init2(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx2 = jsxWithValidationDynamic;
      var jsxs2 = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx2;
      reactJsxRuntime_development.jsxs = jsxs2;
    })();
  }
  return reactJsxRuntime_development;
}
(function(module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = requireReactJsxRuntime_production_min();
  } else {
    module.exports = requireReactJsxRuntime_development();
  }
})(jsxRuntime);
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const CloudSpace = () => {
  const {
    every,
    spaces
  } = useContext(cloudContext);
  return /* @__PURE__ */ jsx("span", {
    className: "cloud-element space",
    ref: (span) => {
      if (span) {
        !every.includes(span) && every.push(span);
        !spaces.includes(span) && spaces.push(span);
      }
    },
    children: " "
  });
};
const CloudWord = ({
  children: content,
  idle = false
}) => {
  const {
    every,
    words
  } = useContext(cloudContext);
  return /* @__PURE__ */ jsx("span", {
    className: "cloud-element word",
    ref: (span) => {
      if (span) {
        if (idle) {
          span.classList.remove("fill");
          span.classList.add("idle");
        } else {
          span.classList.remove("idle");
          span.classList.add("fill");
        }
        span.idle = idle;
        !every.includes(span) && every.push(span);
        !words.includes(span) && words.push(span);
      }
    },
    children: content
  });
};
const getCloudMapper = (mode) => (element, i) => {
  if (element.match(/\n/g))
    return /* @__PURE__ */ jsx("br", {}, `${i}-break`);
  if (element === " ")
    return /* @__PURE__ */ jsx(CloudSpace, {}, `${i}-space`);
  if (mode === "WORD")
    return /* @__PURE__ */ jsx(CloudWord, {
      idle: false,
      children: element
    }, `${i}-${element}`);
  if (mode === "SPACE")
    return /* @__PURE__ */ jsx(CloudWord, {
      idle: true,
      children: element
    }, `${i}-${element}`);
  return element.match(/^\$\{[^\$\{]+\}$/g) ? /* @__PURE__ */ jsx(CloudWord, {
    idle: false,
    children: element.replace(/(^\$\{)|(\}$)/g, "")
  }, `${i}-${element}`) : /* @__PURE__ */ jsx(CloudWord, {
    idle: true,
    children: element
  }, `${i}-${element}`);
};
const split$1 = (str, mode) => str.split(mode === "PARTIAL" ? /(\$\{[^\$\{]+\}|\s)/ : /(\s)/).filter(Boolean);
const fillPolies = (ctx, multiPoly, pr) => {
  multiPoly.forEach((roundedPolies) => {
    ctx.beginPath();
    roundedPolies.forEach((roundedPoly) => {
      roundedPoly.forEach((p, i) => {
        !i && ctx.moveTo(p.in.x * pr, p.in.y * pr);
        ctx.arcTo(p.x * pr, p.y * pr, p.out.x * pr, p.out.y * pr, p.arc.radius * pr);
        ctx.lineTo(p.next.in.x * pr, p.next.in.y * pr);
      });
    });
    ctx.fill();
    ctx.stroke();
  });
};
const canvasDebug = (ctx, width, height, align, snap, cloudRects) => {
  const pr = window.devicePixelRatio;
  const findMin = () => cloudRects.reduce((min2, curr) => curr[0][0][0] < min2 ? curr[0][0][0] : min2, width);
  findMin();
  ctx.strokeStyle = "#f74";
  ctx.lineWidth = 1;
  const h = cloudRects[0][0][2][1] - cloudRects[0][0][0][1];
  const hh = h / snap;
  const proceedX = (fn, y) => {
    if (align === "left" || align === "center")
      for (let x = 0; x <= width; x += hh)
        fn(x, y);
    else if (align === "right")
      for (let x = width; x >= 0; x -= hh)
        fn(x, y);
  };
  const drawLine = (x, y) => {
    ctx.moveTo(x * pr, y * h * pr);
    ctx.lineTo(x * pr, (y + 1) * h * pr);
  };
  ctx.beginPath();
  for (let y = 0; y < height / h; y++)
    proceedX(drawLine, y);
  ctx.stroke();
  ctx.strokeStyle = "#f40";
  cloudRects.forEach((multipoly) => {
    ctx.beginPath();
    multipoly[0].forEach(([x, y], i) => {
      !i ? ctx.moveTo(x * pr, y * pr) : ctx.lineTo(x * pr, y * pr);
    });
    ctx.closePath();
    ctx.stroke();
  });
};
/**
 * splaytree v3.1.1
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var Node = function() {
  function Node2(key, data) {
    this.next = null;
    this.key = key;
    this.data = data;
    this.left = null;
    this.right = null;
  }
  return Node2;
}();
function DEFAULT_COMPARE(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
function splay(i, t, comparator) {
  var N = new Node(null, null);
  var l = N;
  var r = N;
  while (true) {
    var cmp3 = comparator(i, t.key);
    if (cmp3 < 0) {
      if (t.left === null)
        break;
      if (comparator(i, t.left.key) < 0) {
        var y = t.left;
        t.left = y.right;
        y.right = t;
        t = y;
        if (t.left === null)
          break;
      }
      r.left = t;
      r = t;
      t = t.left;
    } else if (cmp3 > 0) {
      if (t.right === null)
        break;
      if (comparator(i, t.right.key) > 0) {
        var y = t.right;
        t.right = y.left;
        y.left = t;
        t = y;
        if (t.right === null)
          break;
      }
      l.right = t;
      l = t;
      t = t.right;
    } else
      break;
  }
  l.right = t.left;
  r.left = t.right;
  t.left = N.right;
  t.right = N.left;
  return t;
}
function insert(i, data, t, comparator) {
  var node = new Node(i, data);
  if (t === null) {
    node.left = node.right = null;
    return node;
  }
  t = splay(i, t, comparator);
  var cmp3 = comparator(i, t.key);
  if (cmp3 < 0) {
    node.left = t.left;
    node.right = t;
    t.left = null;
  } else if (cmp3 >= 0) {
    node.right = t.right;
    node.left = t;
    t.right = null;
  }
  return node;
}
function split(key, v, comparator) {
  var left = null;
  var right = null;
  if (v) {
    v = splay(key, v, comparator);
    var cmp3 = comparator(v.key, key);
    if (cmp3 === 0) {
      left = v.left;
      right = v.right;
    } else if (cmp3 < 0) {
      right = v.right;
      v.right = null;
      left = v;
    } else {
      left = v.left;
      v.left = null;
      right = v;
    }
  }
  return { left, right };
}
function merge(left, right, comparator) {
  if (right === null)
    return left;
  if (left === null)
    return right;
  right = splay(left.key, right, comparator);
  right.left = left;
  return right;
}
function printRow(root, prefix, isTail, out, printNode) {
  if (root) {
    out("" + prefix + (isTail ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") + printNode(root) + "\n");
    var indent = prefix + (isTail ? "    " : "\u2502   ");
    if (root.left)
      printRow(root.left, indent, false, out, printNode);
    if (root.right)
      printRow(root.right, indent, true, out, printNode);
  }
}
var Tree = function() {
  function Tree2(comparator) {
    if (comparator === void 0) {
      comparator = DEFAULT_COMPARE;
    }
    this._root = null;
    this._size = 0;
    this._comparator = comparator;
  }
  Tree2.prototype.insert = function(key, data) {
    this._size++;
    return this._root = insert(key, data, this._root, this._comparator);
  };
  Tree2.prototype.add = function(key, data) {
    var node = new Node(key, data);
    if (this._root === null) {
      node.left = node.right = null;
      this._size++;
      this._root = node;
    }
    var comparator = this._comparator;
    var t = splay(key, this._root, comparator);
    var cmp3 = comparator(key, t.key);
    if (cmp3 === 0)
      this._root = t;
    else {
      if (cmp3 < 0) {
        node.left = t.left;
        node.right = t;
        t.left = null;
      } else if (cmp3 > 0) {
        node.right = t.right;
        node.left = t;
        t.right = null;
      }
      this._size++;
      this._root = node;
    }
    return this._root;
  };
  Tree2.prototype.remove = function(key) {
    this._root = this._remove(key, this._root, this._comparator);
  };
  Tree2.prototype._remove = function(i, t, comparator) {
    var x;
    if (t === null)
      return null;
    t = splay(i, t, comparator);
    var cmp3 = comparator(i, t.key);
    if (cmp3 === 0) {
      if (t.left === null) {
        x = t.right;
      } else {
        x = splay(i, t.left, comparator);
        x.right = t.right;
      }
      this._size--;
      return x;
    }
    return t;
  };
  Tree2.prototype.pop = function() {
    var node = this._root;
    if (node) {
      while (node.left)
        node = node.left;
      this._root = splay(node.key, this._root, this._comparator);
      this._root = this._remove(node.key, this._root, this._comparator);
      return { key: node.key, data: node.data };
    }
    return null;
  };
  Tree2.prototype.findStatic = function(key) {
    var current = this._root;
    var compare = this._comparator;
    while (current) {
      var cmp3 = compare(key, current.key);
      if (cmp3 === 0)
        return current;
      else if (cmp3 < 0)
        current = current.left;
      else
        current = current.right;
    }
    return null;
  };
  Tree2.prototype.find = function(key) {
    if (this._root) {
      this._root = splay(key, this._root, this._comparator);
      if (this._comparator(key, this._root.key) !== 0)
        return null;
    }
    return this._root;
  };
  Tree2.prototype.contains = function(key) {
    var current = this._root;
    var compare = this._comparator;
    while (current) {
      var cmp3 = compare(key, current.key);
      if (cmp3 === 0)
        return true;
      else if (cmp3 < 0)
        current = current.left;
      else
        current = current.right;
    }
    return false;
  };
  Tree2.prototype.forEach = function(visitor, ctx) {
    var current = this._root;
    var Q = [];
    var done = false;
    while (!done) {
      if (current !== null) {
        Q.push(current);
        current = current.left;
      } else {
        if (Q.length !== 0) {
          current = Q.pop();
          visitor.call(ctx, current);
          current = current.right;
        } else
          done = true;
      }
    }
    return this;
  };
  Tree2.prototype.range = function(low, high, fn, ctx) {
    var Q = [];
    var compare = this._comparator;
    var node = this._root;
    var cmp3;
    while (Q.length !== 0 || node) {
      if (node) {
        Q.push(node);
        node = node.left;
      } else {
        node = Q.pop();
        cmp3 = compare(node.key, high);
        if (cmp3 > 0) {
          break;
        } else if (compare(node.key, low) >= 0) {
          if (fn.call(ctx, node))
            return this;
        }
        node = node.right;
      }
    }
    return this;
  };
  Tree2.prototype.keys = function() {
    var keys = [];
    this.forEach(function(_a) {
      var key = _a.key;
      return keys.push(key);
    });
    return keys;
  };
  Tree2.prototype.values = function() {
    var values = [];
    this.forEach(function(_a) {
      var data = _a.data;
      return values.push(data);
    });
    return values;
  };
  Tree2.prototype.min = function() {
    if (this._root)
      return this.minNode(this._root).key;
    return null;
  };
  Tree2.prototype.max = function() {
    if (this._root)
      return this.maxNode(this._root).key;
    return null;
  };
  Tree2.prototype.minNode = function(t) {
    if (t === void 0) {
      t = this._root;
    }
    if (t)
      while (t.left)
        t = t.left;
    return t;
  };
  Tree2.prototype.maxNode = function(t) {
    if (t === void 0) {
      t = this._root;
    }
    if (t)
      while (t.right)
        t = t.right;
    return t;
  };
  Tree2.prototype.at = function(index2) {
    var current = this._root;
    var done = false;
    var i = 0;
    var Q = [];
    while (!done) {
      if (current) {
        Q.push(current);
        current = current.left;
      } else {
        if (Q.length > 0) {
          current = Q.pop();
          if (i === index2)
            return current;
          i++;
          current = current.right;
        } else
          done = true;
      }
    }
    return null;
  };
  Tree2.prototype.next = function(d) {
    var root = this._root;
    var successor = null;
    if (d.right) {
      successor = d.right;
      while (successor.left)
        successor = successor.left;
      return successor;
    }
    var comparator = this._comparator;
    while (root) {
      var cmp3 = comparator(d.key, root.key);
      if (cmp3 === 0)
        break;
      else if (cmp3 < 0) {
        successor = root;
        root = root.left;
      } else
        root = root.right;
    }
    return successor;
  };
  Tree2.prototype.prev = function(d) {
    var root = this._root;
    var predecessor = null;
    if (d.left !== null) {
      predecessor = d.left;
      while (predecessor.right)
        predecessor = predecessor.right;
      return predecessor;
    }
    var comparator = this._comparator;
    while (root) {
      var cmp3 = comparator(d.key, root.key);
      if (cmp3 === 0)
        break;
      else if (cmp3 < 0)
        root = root.left;
      else {
        predecessor = root;
        root = root.right;
      }
    }
    return predecessor;
  };
  Tree2.prototype.clear = function() {
    this._root = null;
    this._size = 0;
    return this;
  };
  Tree2.prototype.toList = function() {
    return toList(this._root);
  };
  Tree2.prototype.load = function(keys, values, presort) {
    if (values === void 0) {
      values = [];
    }
    if (presort === void 0) {
      presort = false;
    }
    var size = keys.length;
    var comparator = this._comparator;
    if (presort)
      sort(keys, values, 0, size - 1, comparator);
    if (this._root === null) {
      this._root = loadRecursive(keys, values, 0, size);
      this._size = size;
    } else {
      var mergedList = mergeLists(this.toList(), createList(keys, values), comparator);
      size = this._size + size;
      this._root = sortedListToBST({ head: mergedList }, 0, size);
    }
    return this;
  };
  Tree2.prototype.isEmpty = function() {
    return this._root === null;
  };
  Object.defineProperty(Tree2.prototype, "size", {
    get: function() {
      return this._size;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Tree2.prototype, "root", {
    get: function() {
      return this._root;
    },
    enumerable: true,
    configurable: true
  });
  Tree2.prototype.toString = function(printNode) {
    if (printNode === void 0) {
      printNode = function(n) {
        return String(n.key);
      };
    }
    var out = [];
    printRow(this._root, "", true, function(v) {
      return out.push(v);
    }, printNode);
    return out.join("");
  };
  Tree2.prototype.update = function(key, newKey, newData) {
    var comparator = this._comparator;
    var _a = split(key, this._root, comparator), left = _a.left, right = _a.right;
    if (comparator(key, newKey) < 0) {
      right = insert(newKey, newData, right, comparator);
    } else {
      left = insert(newKey, newData, left, comparator);
    }
    this._root = merge(left, right, comparator);
  };
  Tree2.prototype.split = function(key) {
    return split(key, this._root, this._comparator);
  };
  Tree2.prototype[Symbol.iterator] = function() {
    var n;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          n = this.minNode();
          _a.label = 1;
        case 1:
          if (!n)
            return [3, 3];
          return [4, n];
        case 2:
          _a.sent();
          n = this.next(n);
          return [3, 1];
        case 3:
          return [2];
      }
    });
  };
  return Tree2;
}();
function loadRecursive(keys, values, start, end) {
  var size = end - start;
  if (size > 0) {
    var middle = start + Math.floor(size / 2);
    var key = keys[middle];
    var data = values[middle];
    var node = new Node(key, data);
    node.left = loadRecursive(keys, values, start, middle);
    node.right = loadRecursive(keys, values, middle + 1, end);
    return node;
  }
  return null;
}
function createList(keys, values) {
  var head = new Node(null, null);
  var p = head;
  for (var i = 0; i < keys.length; i++) {
    p = p.next = new Node(keys[i], values[i]);
  }
  p.next = null;
  return head.next;
}
function toList(root) {
  var current = root;
  var Q = [];
  var done = false;
  var head = new Node(null, null);
  var p = head;
  while (!done) {
    if (current) {
      Q.push(current);
      current = current.left;
    } else {
      if (Q.length > 0) {
        current = p = p.next = Q.pop();
        current = current.right;
      } else
        done = true;
    }
  }
  p.next = null;
  return head.next;
}
function sortedListToBST(list, start, end) {
  var size = end - start;
  if (size > 0) {
    var middle = start + Math.floor(size / 2);
    var left = sortedListToBST(list, start, middle);
    var root = list.head;
    root.left = left;
    list.head = list.head.next;
    root.right = sortedListToBST(list, middle + 1, end);
    return root;
  }
  return null;
}
function mergeLists(l1, l2, compare) {
  var head = new Node(null, null);
  var p = head;
  var p1 = l1;
  var p2 = l2;
  while (p1 !== null && p2 !== null) {
    if (compare(p1.key, p2.key) < 0) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  if (p1 !== null) {
    p.next = p1;
  } else if (p2 !== null) {
    p.next = p2;
  }
  return head.next;
}
function sort(keys, values, left, right, compare) {
  if (left >= right)
    return;
  var pivot = keys[left + right >> 1];
  var i = left - 1;
  var j = right + 1;
  while (true) {
    do
      i++;
    while (compare(keys[i], pivot) < 0);
    do
      j--;
    while (compare(keys[j], pivot) > 0);
    if (i >= j)
      break;
    var tmp = keys[i];
    keys[i] = keys[j];
    keys[j] = tmp;
    tmp = values[i];
    values[i] = values[j];
    values[j] = tmp;
  }
  sort(keys, values, left, j, compare);
  sort(keys, values, j + 1, right, compare);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var isInBbox = function isInBbox2(bbox, point) {
  return bbox.ll.x <= point.x && point.x <= bbox.ur.x && bbox.ll.y <= point.y && point.y <= bbox.ur.y;
};
var getBboxOverlap = function getBboxOverlap2(b1, b2) {
  if (b2.ur.x < b1.ll.x || b1.ur.x < b2.ll.x || b2.ur.y < b1.ll.y || b1.ur.y < b2.ll.y)
    return null;
  var lowerX = b1.ll.x < b2.ll.x ? b2.ll.x : b1.ll.x;
  var upperX = b1.ur.x < b2.ur.x ? b1.ur.x : b2.ur.x;
  var lowerY = b1.ll.y < b2.ll.y ? b2.ll.y : b1.ll.y;
  var upperY = b1.ur.y < b2.ur.y ? b1.ur.y : b2.ur.y;
  return {
    ll: {
      x: lowerX,
      y: lowerY
    },
    ur: {
      x: upperX,
      y: upperY
    }
  };
};
var epsilon = Number.EPSILON;
if (epsilon === void 0)
  epsilon = Math.pow(2, -52);
var EPSILON_SQ = epsilon * epsilon;
var cmp = function cmp2(a, b) {
  if (-epsilon < a && a < epsilon) {
    if (-epsilon < b && b < epsilon) {
      return 0;
    }
  }
  var ab = a - b;
  if (ab * ab < EPSILON_SQ * a * b) {
    return 0;
  }
  return a < b ? -1 : 1;
};
var PtRounder = /* @__PURE__ */ function() {
  function PtRounder2() {
    _classCallCheck(this, PtRounder2);
    this.reset();
  }
  _createClass(PtRounder2, [{
    key: "reset",
    value: function reset() {
      this.xRounder = new CoordRounder();
      this.yRounder = new CoordRounder();
    }
  }, {
    key: "round",
    value: function round2(x, y) {
      return {
        x: this.xRounder.round(x),
        y: this.yRounder.round(y)
      };
    }
  }]);
  return PtRounder2;
}();
var CoordRounder = /* @__PURE__ */ function() {
  function CoordRounder2() {
    _classCallCheck(this, CoordRounder2);
    this.tree = new Tree();
    this.round(0);
  }
  _createClass(CoordRounder2, [{
    key: "round",
    value: function round2(coord) {
      var node = this.tree.add(coord);
      var prevNode = this.tree.prev(node);
      if (prevNode !== null && cmp(node.key, prevNode.key) === 0) {
        this.tree.remove(coord);
        return prevNode.key;
      }
      var nextNode = this.tree.next(node);
      if (nextNode !== null && cmp(node.key, nextNode.key) === 0) {
        this.tree.remove(coord);
        return nextNode.key;
      }
      return coord;
    }
  }]);
  return CoordRounder2;
}();
var rounder = new PtRounder();
var crossProduct = function crossProduct2(a, b) {
  return a.x * b.y - a.y * b.x;
};
var dotProduct = function dotProduct2(a, b) {
  return a.x * b.x + a.y * b.y;
};
var compareVectorAngles = function compareVectorAngles2(basePt, endPt1, endPt2) {
  var v1 = {
    x: endPt1.x - basePt.x,
    y: endPt1.y - basePt.y
  };
  var v2 = {
    x: endPt2.x - basePt.x,
    y: endPt2.y - basePt.y
  };
  var kross = crossProduct(v1, v2);
  return cmp(kross, 0);
};
var length = function length2(v) {
  return Math.sqrt(dotProduct(v, v));
};
var sineOfAngle = function sineOfAngle2(pShared, pBase, pAngle) {
  var vBase = {
    x: pBase.x - pShared.x,
    y: pBase.y - pShared.y
  };
  var vAngle = {
    x: pAngle.x - pShared.x,
    y: pAngle.y - pShared.y
  };
  return crossProduct(vAngle, vBase) / length(vAngle) / length(vBase);
};
var cosineOfAngle = function cosineOfAngle2(pShared, pBase, pAngle) {
  var vBase = {
    x: pBase.x - pShared.x,
    y: pBase.y - pShared.y
  };
  var vAngle = {
    x: pAngle.x - pShared.x,
    y: pAngle.y - pShared.y
  };
  return dotProduct(vAngle, vBase) / length(vAngle) / length(vBase);
};
var horizontalIntersection = function horizontalIntersection2(pt, v, y) {
  if (v.y === 0)
    return null;
  return {
    x: pt.x + v.x / v.y * (y - pt.y),
    y
  };
};
var verticalIntersection = function verticalIntersection2(pt, v, x) {
  if (v.x === 0)
    return null;
  return {
    x,
    y: pt.y + v.y / v.x * (x - pt.x)
  };
};
var intersection = function intersection2(pt1, v1, pt2, v2) {
  if (v1.x === 0)
    return verticalIntersection(pt2, v2, pt1.x);
  if (v2.x === 0)
    return verticalIntersection(pt1, v1, pt2.x);
  if (v1.y === 0)
    return horizontalIntersection(pt2, v2, pt1.y);
  if (v2.y === 0)
    return horizontalIntersection(pt1, v1, pt2.y);
  var kross = crossProduct(v1, v2);
  if (kross == 0)
    return null;
  var ve = {
    x: pt2.x - pt1.x,
    y: pt2.y - pt1.y
  };
  var d1 = crossProduct(ve, v1) / kross;
  var d2 = crossProduct(ve, v2) / kross;
  var x1 = pt1.x + d2 * v1.x, x2 = pt2.x + d1 * v2.x;
  var y1 = pt1.y + d2 * v1.y, y2 = pt2.y + d1 * v2.y;
  var x = (x1 + x2) / 2;
  var y = (y1 + y2) / 2;
  return {
    x,
    y
  };
};
var SweepEvent = /* @__PURE__ */ function() {
  _createClass(SweepEvent2, null, [{
    key: "compare",
    value: function compare(a, b) {
      var ptCmp = SweepEvent2.comparePoints(a.point, b.point);
      if (ptCmp !== 0)
        return ptCmp;
      if (a.point !== b.point)
        a.link(b);
      if (a.isLeft !== b.isLeft)
        return a.isLeft ? 1 : -1;
      return Segment.compare(a.segment, b.segment);
    }
  }, {
    key: "comparePoints",
    value: function comparePoints(aPt, bPt) {
      if (aPt.x < bPt.x)
        return -1;
      if (aPt.x > bPt.x)
        return 1;
      if (aPt.y < bPt.y)
        return -1;
      if (aPt.y > bPt.y)
        return 1;
      return 0;
    }
  }]);
  function SweepEvent2(point, isLeft) {
    _classCallCheck(this, SweepEvent2);
    if (point.events === void 0)
      point.events = [this];
    else
      point.events.push(this);
    this.point = point;
    this.isLeft = isLeft;
  }
  _createClass(SweepEvent2, [{
    key: "link",
    value: function link(other) {
      if (other.point === this.point) {
        throw new Error("Tried to link already linked events");
      }
      var otherEvents = other.point.events;
      for (var i = 0, iMax = otherEvents.length; i < iMax; i++) {
        var evt = otherEvents[i];
        this.point.events.push(evt);
        evt.point = this.point;
      }
      this.checkForConsuming();
    }
  }, {
    key: "checkForConsuming",
    value: function checkForConsuming() {
      var numEvents = this.point.events.length;
      for (var i = 0; i < numEvents; i++) {
        var evt1 = this.point.events[i];
        if (evt1.segment.consumedBy !== void 0)
          continue;
        for (var j = i + 1; j < numEvents; j++) {
          var evt2 = this.point.events[j];
          if (evt2.consumedBy !== void 0)
            continue;
          if (evt1.otherSE.point.events !== evt2.otherSE.point.events)
            continue;
          evt1.segment.consume(evt2.segment);
        }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function getAvailableLinkedEvents() {
      var events = [];
      for (var i = 0, iMax = this.point.events.length; i < iMax; i++) {
        var evt = this.point.events[i];
        if (evt !== this && !evt.segment.ringOut && evt.segment.isInResult()) {
          events.push(evt);
        }
      }
      return events;
    }
  }, {
    key: "getLeftmostComparator",
    value: function getLeftmostComparator(baseEvent) {
      var _this = this;
      var cache = /* @__PURE__ */ new Map();
      var fillCache = function fillCache2(linkedEvent) {
        var nextEvent = linkedEvent.otherSE;
        cache.set(linkedEvent, {
          sine: sineOfAngle(_this.point, baseEvent.point, nextEvent.point),
          cosine: cosineOfAngle(_this.point, baseEvent.point, nextEvent.point)
        });
      };
      return function(a, b) {
        if (!cache.has(a))
          fillCache(a);
        if (!cache.has(b))
          fillCache(b);
        var _cache$get = cache.get(a), asine = _cache$get.sine, acosine = _cache$get.cosine;
        var _cache$get2 = cache.get(b), bsine = _cache$get2.sine, bcosine = _cache$get2.cosine;
        if (asine >= 0 && bsine >= 0) {
          if (acosine < bcosine)
            return 1;
          if (acosine > bcosine)
            return -1;
          return 0;
        }
        if (asine < 0 && bsine < 0) {
          if (acosine < bcosine)
            return -1;
          if (acosine > bcosine)
            return 1;
          return 0;
        }
        if (bsine < asine)
          return -1;
        if (bsine > asine)
          return 1;
        return 0;
      };
    }
  }]);
  return SweepEvent2;
}();
var segmentId = 0;
var Segment = /* @__PURE__ */ function() {
  _createClass(Segment2, null, [{
    key: "compare",
    value: function compare(a, b) {
      var alx = a.leftSE.point.x;
      var blx = b.leftSE.point.x;
      var arx = a.rightSE.point.x;
      var brx = b.rightSE.point.x;
      if (brx < alx)
        return 1;
      if (arx < blx)
        return -1;
      var aly = a.leftSE.point.y;
      var bly = b.leftSE.point.y;
      var ary = a.rightSE.point.y;
      var bry = b.rightSE.point.y;
      if (alx < blx) {
        if (bly < aly && bly < ary)
          return 1;
        if (bly > aly && bly > ary)
          return -1;
        var aCmpBLeft = a.comparePoint(b.leftSE.point);
        if (aCmpBLeft < 0)
          return 1;
        if (aCmpBLeft > 0)
          return -1;
        var bCmpARight = b.comparePoint(a.rightSE.point);
        if (bCmpARight !== 0)
          return bCmpARight;
        return -1;
      }
      if (alx > blx) {
        if (aly < bly && aly < bry)
          return -1;
        if (aly > bly && aly > bry)
          return 1;
        var bCmpALeft = b.comparePoint(a.leftSE.point);
        if (bCmpALeft !== 0)
          return bCmpALeft;
        var aCmpBRight = a.comparePoint(b.rightSE.point);
        if (aCmpBRight < 0)
          return 1;
        if (aCmpBRight > 0)
          return -1;
        return 1;
      }
      if (aly < bly)
        return -1;
      if (aly > bly)
        return 1;
      if (arx < brx) {
        var _bCmpARight = b.comparePoint(a.rightSE.point);
        if (_bCmpARight !== 0)
          return _bCmpARight;
      }
      if (arx > brx) {
        var _aCmpBRight = a.comparePoint(b.rightSE.point);
        if (_aCmpBRight < 0)
          return 1;
        if (_aCmpBRight > 0)
          return -1;
      }
      if (arx !== brx) {
        var ay = ary - aly;
        var ax = arx - alx;
        var by = bry - bly;
        var bx = brx - blx;
        if (ay > ax && by < bx)
          return 1;
        if (ay < ax && by > bx)
          return -1;
      }
      if (arx > brx)
        return 1;
      if (arx < brx)
        return -1;
      if (ary < bry)
        return -1;
      if (ary > bry)
        return 1;
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
    }
  }]);
  function Segment2(leftSE, rightSE, rings, windings) {
    _classCallCheck(this, Segment2);
    this.id = ++segmentId;
    this.leftSE = leftSE;
    leftSE.segment = this;
    leftSE.otherSE = rightSE;
    this.rightSE = rightSE;
    rightSE.segment = this;
    rightSE.otherSE = leftSE;
    this.rings = rings;
    this.windings = windings;
  }
  _createClass(Segment2, [{
    key: "replaceRightSE",
    value: function replaceRightSE(newRightSE) {
      this.rightSE = newRightSE;
      this.rightSE.segment = this;
      this.rightSE.otherSE = this.leftSE;
      this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function bbox() {
      var y1 = this.leftSE.point.y;
      var y2 = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: y1 < y2 ? y1 : y2
        },
        ur: {
          x: this.rightSE.point.x,
          y: y1 > y2 ? y1 : y2
        }
      };
    }
  }, {
    key: "vector",
    value: function vector() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function isAnEndpoint(pt) {
      return pt.x === this.leftSE.point.x && pt.y === this.leftSE.point.y || pt.x === this.rightSE.point.x && pt.y === this.rightSE.point.y;
    }
  }, {
    key: "comparePoint",
    value: function comparePoint(point) {
      if (this.isAnEndpoint(point))
        return 0;
      var lPt = this.leftSE.point;
      var rPt = this.rightSE.point;
      var v = this.vector();
      if (lPt.x === rPt.x) {
        if (point.x === lPt.x)
          return 0;
        return point.x < lPt.x ? 1 : -1;
      }
      var yDist = (point.y - lPt.y) / v.y;
      var xFromYDist = lPt.x + yDist * v.x;
      if (point.x === xFromYDist)
        return 0;
      var xDist = (point.x - lPt.x) / v.x;
      var yFromXDist = lPt.y + xDist * v.y;
      if (point.y === yFromXDist)
        return 0;
      return point.y < yFromXDist ? -1 : 1;
    }
  }, {
    key: "getIntersection",
    value: function getIntersection(other) {
      var tBbox = this.bbox();
      var oBbox = other.bbox();
      var bboxOverlap = getBboxOverlap(tBbox, oBbox);
      if (bboxOverlap === null)
        return null;
      var tlp = this.leftSE.point;
      var trp = this.rightSE.point;
      var olp = other.leftSE.point;
      var orp = other.rightSE.point;
      var touchesOtherLSE = isInBbox(tBbox, olp) && this.comparePoint(olp) === 0;
      var touchesThisLSE = isInBbox(oBbox, tlp) && other.comparePoint(tlp) === 0;
      var touchesOtherRSE = isInBbox(tBbox, orp) && this.comparePoint(orp) === 0;
      var touchesThisRSE = isInBbox(oBbox, trp) && other.comparePoint(trp) === 0;
      if (touchesThisLSE && touchesOtherLSE) {
        if (touchesThisRSE && !touchesOtherRSE)
          return trp;
        if (!touchesThisRSE && touchesOtherRSE)
          return orp;
        return null;
      }
      if (touchesThisLSE) {
        if (touchesOtherRSE) {
          if (tlp.x === orp.x && tlp.y === orp.y)
            return null;
        }
        return tlp;
      }
      if (touchesOtherLSE) {
        if (touchesThisRSE) {
          if (trp.x === olp.x && trp.y === olp.y)
            return null;
        }
        return olp;
      }
      if (touchesThisRSE && touchesOtherRSE)
        return null;
      if (touchesThisRSE)
        return trp;
      if (touchesOtherRSE)
        return orp;
      var pt = intersection(tlp, this.vector(), olp, other.vector());
      if (pt === null)
        return null;
      if (!isInBbox(bboxOverlap, pt))
        return null;
      return rounder.round(pt.x, pt.y);
    }
  }, {
    key: "split",
    value: function split2(point) {
      var newEvents = [];
      var alreadyLinked = point.events !== void 0;
      var newLeftSE = new SweepEvent(point, true);
      var newRightSE = new SweepEvent(point, false);
      var oldRightSE = this.rightSE;
      this.replaceRightSE(newRightSE);
      newEvents.push(newRightSE);
      newEvents.push(newLeftSE);
      var newSeg = new Segment2(newLeftSE, oldRightSE, this.rings.slice(), this.windings.slice());
      if (SweepEvent.comparePoints(newSeg.leftSE.point, newSeg.rightSE.point) > 0) {
        newSeg.swapEvents();
      }
      if (SweepEvent.comparePoints(this.leftSE.point, this.rightSE.point) > 0) {
        this.swapEvents();
      }
      if (alreadyLinked) {
        newLeftSE.checkForConsuming();
        newRightSE.checkForConsuming();
      }
      return newEvents;
    }
  }, {
    key: "swapEvents",
    value: function swapEvents() {
      var tmpEvt = this.rightSE;
      this.rightSE = this.leftSE;
      this.leftSE = tmpEvt;
      this.leftSE.isLeft = true;
      this.rightSE.isLeft = false;
      for (var i = 0, iMax = this.windings.length; i < iMax; i++) {
        this.windings[i] *= -1;
      }
    }
  }, {
    key: "consume",
    value: function consume(other) {
      var consumer = this;
      var consumee = other;
      while (consumer.consumedBy) {
        consumer = consumer.consumedBy;
      }
      while (consumee.consumedBy) {
        consumee = consumee.consumedBy;
      }
      var cmp3 = Segment2.compare(consumer, consumee);
      if (cmp3 === 0)
        return;
      if (cmp3 > 0) {
        var tmp = consumer;
        consumer = consumee;
        consumee = tmp;
      }
      if (consumer.prev === consumee) {
        var _tmp = consumer;
        consumer = consumee;
        consumee = _tmp;
      }
      for (var i = 0, iMax = consumee.rings.length; i < iMax; i++) {
        var ring = consumee.rings[i];
        var winding = consumee.windings[i];
        var index2 = consumer.rings.indexOf(ring);
        if (index2 === -1) {
          consumer.rings.push(ring);
          consumer.windings.push(winding);
        } else
          consumer.windings[index2] += winding;
      }
      consumee.rings = null;
      consumee.windings = null;
      consumee.consumedBy = consumer;
      consumee.leftSE.consumedBy = consumer.leftSE;
      consumee.rightSE.consumedBy = consumer.rightSE;
    }
  }, {
    key: "prevInResult",
    value: function prevInResult() {
      if (this._prevInResult !== void 0)
        return this._prevInResult;
      if (!this.prev)
        this._prevInResult = null;
      else if (this.prev.isInResult())
        this._prevInResult = this.prev;
      else
        this._prevInResult = this.prev.prevInResult();
      return this._prevInResult;
    }
  }, {
    key: "beforeState",
    value: function beforeState() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var seg = this.prev.consumedBy || this.prev;
        this._beforeState = seg.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function afterState() {
      if (this._afterState !== void 0)
        return this._afterState;
      var beforeState = this.beforeState();
      this._afterState = {
        rings: beforeState.rings.slice(0),
        windings: beforeState.windings.slice(0),
        multiPolys: []
      };
      var ringsAfter = this._afterState.rings;
      var windingsAfter = this._afterState.windings;
      var mpsAfter = this._afterState.multiPolys;
      for (var i = 0, iMax = this.rings.length; i < iMax; i++) {
        var ring = this.rings[i];
        var winding = this.windings[i];
        var index2 = ringsAfter.indexOf(ring);
        if (index2 === -1) {
          ringsAfter.push(ring);
          windingsAfter.push(winding);
        } else
          windingsAfter[index2] += winding;
      }
      var polysAfter = [];
      var polysExclude = [];
      for (var _i = 0, _iMax = ringsAfter.length; _i < _iMax; _i++) {
        if (windingsAfter[_i] === 0)
          continue;
        var _ring = ringsAfter[_i];
        var poly = _ring.poly;
        if (polysExclude.indexOf(poly) !== -1)
          continue;
        if (_ring.isExterior)
          polysAfter.push(poly);
        else {
          if (polysExclude.indexOf(poly) === -1)
            polysExclude.push(poly);
          var _index = polysAfter.indexOf(_ring.poly);
          if (_index !== -1)
            polysAfter.splice(_index, 1);
        }
      }
      for (var _i2 = 0, _iMax2 = polysAfter.length; _i2 < _iMax2; _i2++) {
        var mp = polysAfter[_i2].multiPoly;
        if (mpsAfter.indexOf(mp) === -1)
          mpsAfter.push(mp);
      }
      return this._afterState;
    }
  }, {
    key: "isInResult",
    value: function isInResult() {
      if (this.consumedBy)
        return false;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var mpsBefore = this.beforeState().multiPolys;
      var mpsAfter = this.afterState().multiPolys;
      switch (operation.type) {
        case "union": {
          var noBefores = mpsBefore.length === 0;
          var noAfters = mpsAfter.length === 0;
          this._isInResult = noBefores !== noAfters;
          break;
        }
        case "intersection": {
          var least;
          var most;
          if (mpsBefore.length < mpsAfter.length) {
            least = mpsBefore.length;
            most = mpsAfter.length;
          } else {
            least = mpsAfter.length;
            most = mpsBefore.length;
          }
          this._isInResult = most === operation.numMultiPolys && least < most;
          break;
        }
        case "xor": {
          var diff = Math.abs(mpsBefore.length - mpsAfter.length);
          this._isInResult = diff % 2 === 1;
          break;
        }
        case "difference": {
          var isJustSubject = function isJustSubject2(mps) {
            return mps.length === 1 && mps[0].isSubject;
          };
          this._isInResult = isJustSubject(mpsBefore) !== isJustSubject(mpsAfter);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(operation.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function fromRing(pt1, pt2, ring) {
      var leftPt, rightPt, winding;
      var cmpPts = SweepEvent.comparePoints(pt1, pt2);
      if (cmpPts < 0) {
        leftPt = pt1;
        rightPt = pt2;
        winding = 1;
      } else if (cmpPts > 0) {
        leftPt = pt2;
        rightPt = pt1;
        winding = -1;
      } else
        throw new Error("Tried to create degenerate segment at [".concat(pt1.x, ", ").concat(pt1.y, "]"));
      var leftSE = new SweepEvent(leftPt, true);
      var rightSE = new SweepEvent(rightPt, false);
      return new Segment2(leftSE, rightSE, [ring], [winding]);
    }
  }]);
  return Segment2;
}();
var RingIn = /* @__PURE__ */ function() {
  function RingIn2(geomRing, poly, isExterior) {
    _classCallCheck(this, RingIn2);
    if (!Array.isArray(geomRing) || geomRing.length === 0) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    this.poly = poly;
    this.isExterior = isExterior;
    this.segments = [];
    if (typeof geomRing[0][0] !== "number" || typeof geomRing[0][1] !== "number") {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    var firstPoint = rounder.round(geomRing[0][0], geomRing[0][1]);
    this.bbox = {
      ll: {
        x: firstPoint.x,
        y: firstPoint.y
      },
      ur: {
        x: firstPoint.x,
        y: firstPoint.y
      }
    };
    var prevPoint = firstPoint;
    for (var i = 1, iMax = geomRing.length; i < iMax; i++) {
      if (typeof geomRing[i][0] !== "number" || typeof geomRing[i][1] !== "number") {
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      }
      var point = rounder.round(geomRing[i][0], geomRing[i][1]);
      if (point.x === prevPoint.x && point.y === prevPoint.y)
        continue;
      this.segments.push(Segment.fromRing(prevPoint, point, this));
      if (point.x < this.bbox.ll.x)
        this.bbox.ll.x = point.x;
      if (point.y < this.bbox.ll.y)
        this.bbox.ll.y = point.y;
      if (point.x > this.bbox.ur.x)
        this.bbox.ur.x = point.x;
      if (point.y > this.bbox.ur.y)
        this.bbox.ur.y = point.y;
      prevPoint = point;
    }
    if (firstPoint.x !== prevPoint.x || firstPoint.y !== prevPoint.y) {
      this.segments.push(Segment.fromRing(prevPoint, firstPoint, this));
    }
  }
  _createClass(RingIn2, [{
    key: "getSweepEvents",
    value: function getSweepEvents() {
      var sweepEvents = [];
      for (var i = 0, iMax = this.segments.length; i < iMax; i++) {
        var segment = this.segments[i];
        sweepEvents.push(segment.leftSE);
        sweepEvents.push(segment.rightSE);
      }
      return sweepEvents;
    }
  }]);
  return RingIn2;
}();
var PolyIn = /* @__PURE__ */ function() {
  function PolyIn2(geomPoly, multiPoly) {
    _classCallCheck(this, PolyIn2);
    if (!Array.isArray(geomPoly)) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    this.exteriorRing = new RingIn(geomPoly[0], this, true);
    this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    };
    this.interiorRings = [];
    for (var i = 1, iMax = geomPoly.length; i < iMax; i++) {
      var ring = new RingIn(geomPoly[i], this, false);
      if (ring.bbox.ll.x < this.bbox.ll.x)
        this.bbox.ll.x = ring.bbox.ll.x;
      if (ring.bbox.ll.y < this.bbox.ll.y)
        this.bbox.ll.y = ring.bbox.ll.y;
      if (ring.bbox.ur.x > this.bbox.ur.x)
        this.bbox.ur.x = ring.bbox.ur.x;
      if (ring.bbox.ur.y > this.bbox.ur.y)
        this.bbox.ur.y = ring.bbox.ur.y;
      this.interiorRings.push(ring);
    }
    this.multiPoly = multiPoly;
  }
  _createClass(PolyIn2, [{
    key: "getSweepEvents",
    value: function getSweepEvents() {
      var sweepEvents = this.exteriorRing.getSweepEvents();
      for (var i = 0, iMax = this.interiorRings.length; i < iMax; i++) {
        var ringSweepEvents = this.interiorRings[i].getSweepEvents();
        for (var j = 0, jMax = ringSweepEvents.length; j < jMax; j++) {
          sweepEvents.push(ringSweepEvents[j]);
        }
      }
      return sweepEvents;
    }
  }]);
  return PolyIn2;
}();
var MultiPolyIn = /* @__PURE__ */ function() {
  function MultiPolyIn2(geom, isSubject) {
    _classCallCheck(this, MultiPolyIn2);
    if (!Array.isArray(geom)) {
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    }
    try {
      if (typeof geom[0][0][0] === "number")
        geom = [geom];
    } catch (ex) {
    }
    this.polys = [];
    this.bbox = {
      ll: {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY
      },
      ur: {
        x: Number.NEGATIVE_INFINITY,
        y: Number.NEGATIVE_INFINITY
      }
    };
    for (var i = 0, iMax = geom.length; i < iMax; i++) {
      var poly = new PolyIn(geom[i], this);
      if (poly.bbox.ll.x < this.bbox.ll.x)
        this.bbox.ll.x = poly.bbox.ll.x;
      if (poly.bbox.ll.y < this.bbox.ll.y)
        this.bbox.ll.y = poly.bbox.ll.y;
      if (poly.bbox.ur.x > this.bbox.ur.x)
        this.bbox.ur.x = poly.bbox.ur.x;
      if (poly.bbox.ur.y > this.bbox.ur.y)
        this.bbox.ur.y = poly.bbox.ur.y;
      this.polys.push(poly);
    }
    this.isSubject = isSubject;
  }
  _createClass(MultiPolyIn2, [{
    key: "getSweepEvents",
    value: function getSweepEvents() {
      var sweepEvents = [];
      for (var i = 0, iMax = this.polys.length; i < iMax; i++) {
        var polySweepEvents = this.polys[i].getSweepEvents();
        for (var j = 0, jMax = polySweepEvents.length; j < jMax; j++) {
          sweepEvents.push(polySweepEvents[j]);
        }
      }
      return sweepEvents;
    }
  }]);
  return MultiPolyIn2;
}();
var RingOut = /* @__PURE__ */ function() {
  _createClass(RingOut2, null, [{
    key: "factory",
    value: function factory(allSegments) {
      var ringsOut = [];
      for (var i = 0, iMax = allSegments.length; i < iMax; i++) {
        var segment = allSegments[i];
        if (!segment.isInResult() || segment.ringOut)
          continue;
        var prevEvent = null;
        var event = segment.leftSE;
        var nextEvent = segment.rightSE;
        var events = [event];
        var startingPoint = event.point;
        var intersectionLEs = [];
        while (true) {
          prevEvent = event;
          event = nextEvent;
          events.push(event);
          if (event.point === startingPoint)
            break;
          while (true) {
            var availableLEs = event.getAvailableLinkedEvents();
            if (availableLEs.length === 0) {
              var firstPt = events[0].point;
              var lastPt = events[events.length - 1].point;
              throw new Error("Unable to complete output ring starting at [".concat(firstPt.x, ",") + " ".concat(firstPt.y, "]. Last matching segment found ends at") + " [".concat(lastPt.x, ", ").concat(lastPt.y, "]."));
            }
            if (availableLEs.length === 1) {
              nextEvent = availableLEs[0].otherSE;
              break;
            }
            var indexLE = null;
            for (var j = 0, jMax = intersectionLEs.length; j < jMax; j++) {
              if (intersectionLEs[j].point === event.point) {
                indexLE = j;
                break;
              }
            }
            if (indexLE !== null) {
              var intersectionLE = intersectionLEs.splice(indexLE)[0];
              var ringEvents = events.splice(intersectionLE.index);
              ringEvents.unshift(ringEvents[0].otherSE);
              ringsOut.push(new RingOut2(ringEvents.reverse()));
              continue;
            }
            intersectionLEs.push({
              index: events.length,
              point: event.point
            });
            var comparator = event.getLeftmostComparator(prevEvent);
            nextEvent = availableLEs.sort(comparator)[0].otherSE;
            break;
          }
        }
        ringsOut.push(new RingOut2(events));
      }
      return ringsOut;
    }
  }]);
  function RingOut2(events) {
    _classCallCheck(this, RingOut2);
    this.events = events;
    for (var i = 0, iMax = events.length; i < iMax; i++) {
      events[i].segment.ringOut = this;
    }
    this.poly = null;
  }
  _createClass(RingOut2, [{
    key: "getGeom",
    value: function getGeom() {
      var prevPt = this.events[0].point;
      var points = [prevPt];
      for (var i = 1, iMax = this.events.length - 1; i < iMax; i++) {
        var _pt = this.events[i].point;
        var _nextPt = this.events[i + 1].point;
        if (compareVectorAngles(_pt, prevPt, _nextPt) === 0)
          continue;
        points.push(_pt);
        prevPt = _pt;
      }
      if (points.length === 1)
        return null;
      var pt = points[0];
      var nextPt = points[1];
      if (compareVectorAngles(pt, prevPt, nextPt) === 0)
        points.shift();
      points.push(points[0]);
      var step = this.isExteriorRing() ? 1 : -1;
      var iStart = this.isExteriorRing() ? 0 : points.length - 1;
      var iEnd = this.isExteriorRing() ? points.length : -1;
      var orderedPoints = [];
      for (var _i = iStart; _i != iEnd; _i += step) {
        orderedPoints.push([points[_i].x, points[_i].y]);
      }
      return orderedPoints;
    }
  }, {
    key: "isExteriorRing",
    value: function isExteriorRing() {
      if (this._isExteriorRing === void 0) {
        var enclosing = this.enclosingRing();
        this._isExteriorRing = enclosing ? !enclosing.isExteriorRing() : true;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function enclosingRing() {
      if (this._enclosingRing === void 0) {
        this._enclosingRing = this._calcEnclosingRing();
      }
      return this._enclosingRing;
    }
  }, {
    key: "_calcEnclosingRing",
    value: function _calcEnclosingRing() {
      var leftMostEvt = this.events[0];
      for (var i = 1, iMax = this.events.length; i < iMax; i++) {
        var evt = this.events[i];
        if (SweepEvent.compare(leftMostEvt, evt) > 0)
          leftMostEvt = evt;
      }
      var prevSeg = leftMostEvt.segment.prevInResult();
      var prevPrevSeg = prevSeg ? prevSeg.prevInResult() : null;
      while (true) {
        if (!prevSeg)
          return null;
        if (!prevPrevSeg)
          return prevSeg.ringOut;
        if (prevPrevSeg.ringOut !== prevSeg.ringOut) {
          if (prevPrevSeg.ringOut.enclosingRing() !== prevSeg.ringOut) {
            return prevSeg.ringOut;
          } else
            return prevSeg.ringOut.enclosingRing();
        }
        prevSeg = prevPrevSeg.prevInResult();
        prevPrevSeg = prevSeg ? prevSeg.prevInResult() : null;
      }
    }
  }]);
  return RingOut2;
}();
var PolyOut = /* @__PURE__ */ function() {
  function PolyOut2(exteriorRing) {
    _classCallCheck(this, PolyOut2);
    this.exteriorRing = exteriorRing;
    exteriorRing.poly = this;
    this.interiorRings = [];
  }
  _createClass(PolyOut2, [{
    key: "addInterior",
    value: function addInterior(ring) {
      this.interiorRings.push(ring);
      ring.poly = this;
    }
  }, {
    key: "getGeom",
    value: function getGeom() {
      var geom = [this.exteriorRing.getGeom()];
      if (geom[0] === null)
        return null;
      for (var i = 0, iMax = this.interiorRings.length; i < iMax; i++) {
        var ringGeom = this.interiorRings[i].getGeom();
        if (ringGeom === null)
          continue;
        geom.push(ringGeom);
      }
      return geom;
    }
  }]);
  return PolyOut2;
}();
var MultiPolyOut = /* @__PURE__ */ function() {
  function MultiPolyOut2(rings) {
    _classCallCheck(this, MultiPolyOut2);
    this.rings = rings;
    this.polys = this._composePolys(rings);
  }
  _createClass(MultiPolyOut2, [{
    key: "getGeom",
    value: function getGeom() {
      var geom = [];
      for (var i = 0, iMax = this.polys.length; i < iMax; i++) {
        var polyGeom = this.polys[i].getGeom();
        if (polyGeom === null)
          continue;
        geom.push(polyGeom);
      }
      return geom;
    }
  }, {
    key: "_composePolys",
    value: function _composePolys(rings) {
      var polys = [];
      for (var i = 0, iMax = rings.length; i < iMax; i++) {
        var ring = rings[i];
        if (ring.poly)
          continue;
        if (ring.isExteriorRing())
          polys.push(new PolyOut(ring));
        else {
          var enclosingRing = ring.enclosingRing();
          if (!enclosingRing.poly)
            polys.push(new PolyOut(enclosingRing));
          enclosingRing.poly.addInterior(ring);
        }
      }
      return polys;
    }
  }]);
  return MultiPolyOut2;
}();
var SweepLine = /* @__PURE__ */ function() {
  function SweepLine2(queue) {
    var comparator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Segment.compare;
    _classCallCheck(this, SweepLine2);
    this.queue = queue;
    this.tree = new Tree(comparator);
    this.segments = [];
  }
  _createClass(SweepLine2, [{
    key: "process",
    value: function process2(event) {
      var segment = event.segment;
      var newEvents = [];
      if (event.consumedBy) {
        if (event.isLeft)
          this.queue.remove(event.otherSE);
        else
          this.tree.remove(segment);
        return newEvents;
      }
      var node = event.isLeft ? this.tree.insert(segment) : this.tree.find(segment);
      if (!node)
        throw new Error("Unable to find segment #".concat(segment.id, " ") + "[".concat(segment.leftSE.point.x, ", ").concat(segment.leftSE.point.y, "] -> ") + "[".concat(segment.rightSE.point.x, ", ").concat(segment.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      var prevNode = node;
      var nextNode = node;
      var prevSeg = void 0;
      var nextSeg = void 0;
      while (prevSeg === void 0) {
        prevNode = this.tree.prev(prevNode);
        if (prevNode === null)
          prevSeg = null;
        else if (prevNode.key.consumedBy === void 0)
          prevSeg = prevNode.key;
      }
      while (nextSeg === void 0) {
        nextNode = this.tree.next(nextNode);
        if (nextNode === null)
          nextSeg = null;
        else if (nextNode.key.consumedBy === void 0)
          nextSeg = nextNode.key;
      }
      if (event.isLeft) {
        var prevMySplitter = null;
        if (prevSeg) {
          var prevInter = prevSeg.getIntersection(segment);
          if (prevInter !== null) {
            if (!segment.isAnEndpoint(prevInter))
              prevMySplitter = prevInter;
            if (!prevSeg.isAnEndpoint(prevInter)) {
              var newEventsFromSplit = this._splitSafely(prevSeg, prevInter);
              for (var i = 0, iMax = newEventsFromSplit.length; i < iMax; i++) {
                newEvents.push(newEventsFromSplit[i]);
              }
            }
          }
        }
        var nextMySplitter = null;
        if (nextSeg) {
          var nextInter = nextSeg.getIntersection(segment);
          if (nextInter !== null) {
            if (!segment.isAnEndpoint(nextInter))
              nextMySplitter = nextInter;
            if (!nextSeg.isAnEndpoint(nextInter)) {
              var _newEventsFromSplit = this._splitSafely(nextSeg, nextInter);
              for (var _i = 0, _iMax = _newEventsFromSplit.length; _i < _iMax; _i++) {
                newEvents.push(_newEventsFromSplit[_i]);
              }
            }
          }
        }
        if (prevMySplitter !== null || nextMySplitter !== null) {
          var mySplitter = null;
          if (prevMySplitter === null)
            mySplitter = nextMySplitter;
          else if (nextMySplitter === null)
            mySplitter = prevMySplitter;
          else {
            var cmpSplitters = SweepEvent.comparePoints(prevMySplitter, nextMySplitter);
            mySplitter = cmpSplitters <= 0 ? prevMySplitter : nextMySplitter;
          }
          this.queue.remove(segment.rightSE);
          newEvents.push(segment.rightSE);
          var _newEventsFromSplit2 = segment.split(mySplitter);
          for (var _i2 = 0, _iMax2 = _newEventsFromSplit2.length; _i2 < _iMax2; _i2++) {
            newEvents.push(_newEventsFromSplit2[_i2]);
          }
        }
        if (newEvents.length > 0) {
          this.tree.remove(segment);
          newEvents.push(event);
        } else {
          this.segments.push(segment);
          segment.prev = prevSeg;
        }
      } else {
        if (prevSeg && nextSeg) {
          var inter = prevSeg.getIntersection(nextSeg);
          if (inter !== null) {
            if (!prevSeg.isAnEndpoint(inter)) {
              var _newEventsFromSplit3 = this._splitSafely(prevSeg, inter);
              for (var _i3 = 0, _iMax3 = _newEventsFromSplit3.length; _i3 < _iMax3; _i3++) {
                newEvents.push(_newEventsFromSplit3[_i3]);
              }
            }
            if (!nextSeg.isAnEndpoint(inter)) {
              var _newEventsFromSplit4 = this._splitSafely(nextSeg, inter);
              for (var _i4 = 0, _iMax4 = _newEventsFromSplit4.length; _i4 < _iMax4; _i4++) {
                newEvents.push(_newEventsFromSplit4[_i4]);
              }
            }
          }
        }
        this.tree.remove(segment);
      }
      return newEvents;
    }
  }, {
    key: "_splitSafely",
    value: function _splitSafely(seg, pt) {
      this.tree.remove(seg);
      var rightSE = seg.rightSE;
      this.queue.remove(rightSE);
      var newEvents = seg.split(pt);
      newEvents.push(rightSE);
      if (seg.consumedBy === void 0)
        this.tree.insert(seg);
      return newEvents;
    }
  }]);
  return SweepLine2;
}();
var POLYGON_CLIPPING_MAX_QUEUE_SIZE = typeof process !== "undefined" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6;
var POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS = typeof process !== "undefined" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
var Operation = /* @__PURE__ */ function() {
  function Operation2() {
    _classCallCheck(this, Operation2);
  }
  _createClass(Operation2, [{
    key: "run",
    value: function run(type, geom, moreGeoms) {
      operation.type = type;
      rounder.reset();
      var multipolys = [new MultiPolyIn(geom, true)];
      for (var i = 0, iMax = moreGeoms.length; i < iMax; i++) {
        multipolys.push(new MultiPolyIn(moreGeoms[i], false));
      }
      operation.numMultiPolys = multipolys.length;
      if (operation.type === "difference") {
        var subject = multipolys[0];
        var _i = 1;
        while (_i < multipolys.length) {
          if (getBboxOverlap(multipolys[_i].bbox, subject.bbox) !== null)
            _i++;
          else
            multipolys.splice(_i, 1);
        }
      }
      if (operation.type === "intersection") {
        for (var _i2 = 0, _iMax = multipolys.length; _i2 < _iMax; _i2++) {
          var mpA = multipolys[_i2];
          for (var j = _i2 + 1, jMax = multipolys.length; j < jMax; j++) {
            if (getBboxOverlap(mpA.bbox, multipolys[j].bbox) === null)
              return [];
          }
        }
      }
      var queue = new Tree(SweepEvent.compare);
      for (var _i3 = 0, _iMax2 = multipolys.length; _i3 < _iMax2; _i3++) {
        var sweepEvents = multipolys[_i3].getSweepEvents();
        for (var _j = 0, _jMax = sweepEvents.length; _j < _jMax; _j++) {
          queue.insert(sweepEvents[_j]);
          if (queue.size > POLYGON_CLIPPING_MAX_QUEUE_SIZE) {
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
          }
        }
      }
      var sweepLine = new SweepLine(queue);
      var prevQueueSize = queue.size;
      var node = queue.pop();
      while (node) {
        var evt = node.key;
        if (queue.size === prevQueueSize) {
          var seg = evt.segment;
          throw new Error("Unable to pop() ".concat(evt.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(evt.point.x, ", ").concat(evt.point.y, "] from segment #").concat(seg.id, " ") + "[".concat(seg.leftSE.point.x, ", ").concat(seg.leftSE.point.y, "] -> ") + "[".concat(seg.rightSE.point.x, ", ").concat(seg.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (queue.size > POLYGON_CLIPPING_MAX_QUEUE_SIZE) {
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        }
        if (sweepLine.segments.length > POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS) {
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        }
        var newEvents = sweepLine.process(evt);
        for (var _i4 = 0, _iMax3 = newEvents.length; _i4 < _iMax3; _i4++) {
          var _evt = newEvents[_i4];
          if (_evt.consumedBy === void 0)
            queue.insert(_evt);
        }
        prevQueueSize = queue.size;
        node = queue.pop();
      }
      rounder.reset();
      var ringsOut = RingOut.factory(sweepLine.segments);
      var result = new MultiPolyOut(ringsOut);
      return result.getGeom();
    }
  }]);
  return Operation2;
}();
var operation = new Operation();
var union = function union2(geom) {
  for (var _len = arguments.length, moreGeoms = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    moreGeoms[_key - 1] = arguments[_key];
  }
  return operation.run("union", geom, moreGeoms);
};
var intersection$1 = function intersection3(geom) {
  for (var _len2 = arguments.length, moreGeoms = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    moreGeoms[_key2 - 1] = arguments[_key2];
  }
  return operation.run("intersection", geom, moreGeoms);
};
var xor = function xor2(geom) {
  for (var _len3 = arguments.length, moreGeoms = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    moreGeoms[_key3 - 1] = arguments[_key3];
  }
  return operation.run("xor", geom, moreGeoms);
};
var difference = function difference2(subjectGeom) {
  for (var _len4 = arguments.length, clippingGeoms = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    clippingGeoms[_key4 - 1] = arguments[_key4];
  }
  return operation.run("difference", subjectGeom, clippingGeoms);
};
var index = {
  union,
  intersection: intersection$1,
  xor,
  difference
};
const round = (n) => Math.round(n * 1e10) / 1e10;
const getLength = (A, B) => round(Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y)));
const PI$1 = Math.PI, TAU = PI$1 * 2;
const getClockDir = (angle1, angle2) => {
  const diff = angle2 - angle1;
  return diff > PI$1 && diff < TAU || diff < 0 && diff > -PI$1 ? -1 : 1;
};
const getAngles = (prevpoint, currpoint, nextpoint, prevlen, mainlen, nextlen) => {
  const prev = Math.atan2(prevpoint.y - currpoint.y, prevpoint.x - currpoint.x), next = Math.atan2(nextpoint.y - currpoint.y, nextpoint.x - currpoint.x), main = Math.acos((prevlen * prevlen + nextlen * nextlen - mainlen * mainlen) / (2 * prevlen * nextlen)), vel = 1 / Math.tan(main / 2), dir = getClockDir(prev, next), bis = prev + dir * main / 2;
  return { prev, next, main, vel, dir, bis };
};
const roundPolygon = (points, radius = 0) => {
  const len = points.length, preRoundedPoints = [], limPoints = [], zeroLimPoints = [];
  points.forEach((curr, id) => {
    const prev = points[(id - 1 + len) % len], next = points[(id + 1) % len], prevlen = getLength(prev, curr), mainlen = getLength(prev, next), nextlen = getLength(curr, next), angle = getAngles(prev, curr, next, prevlen, mainlen, nextlen);
    if (angle.main === 0) {
      angle.main = Number.EPSILON;
      angle.vel = Number.MAX_SAFE_INTEGER;
    }
    if (angle.main === PI$1)
      angle.vel = 0;
    const preRoundedPoint = {
      x: curr.x,
      y: curr.y,
      angle,
      offset: 0,
      arc: {
        radius,
        hit: radius,
        lim: Math.min(nextlen / angle.vel, prevlen / angle.vel, curr.r || 0)
      },
      in: { length: prevlen, rest: prevlen },
      out: { length: nextlen, rest: nextlen },
      locked: false,
      id,
      get prev() {
        return preRoundedPoints[(id - 1 + len) % len];
      },
      get next() {
        return preRoundedPoints[(id + 1) % len];
      }
    };
    if (isNaN(angle.main)) {
      angle.main = 0;
      angle.bis = angle.prev || angle.next;
      zeroLimPoints.push(preRoundedPoint);
    }
    if (typeof curr.r === "number")
      if (curr.r === 0)
        zeroLimPoints.push(preRoundedPoint);
      else
        limPoints.push(preRoundedPoint);
    preRoundedPoints.push(preRoundedPoint);
  });
  zeroLimPoints.forEach((p) => {
    p.angle.vel = 0;
    p.arc.radius = 0;
    lockPoint(p);
  });
  preRoundedPoints.forEach((p) => {
    p.arc.hit = Math.min(p.out.rest / (p.angle.vel + p.next.angle.vel), p.in.rest / (p.angle.vel + p.prev.angle.vel));
  });
  let minHitPoint = getMinHit(limPoints);
  while (minHitPoint) {
    calcLimitRadius(minHitPoint);
    minHitPoint = getMinHit(limPoints);
  }
  minHitPoint = getMinHit(preRoundedPoints);
  while (minHitPoint) {
    calcCommonRadius(minHitPoint, radius);
    minHitPoint = getMinHit(preRoundedPoints);
  }
  const roundedPoints = preRoundedPoints.map((p) => {
    const bislen = p.arc.radius / Math.sin(p.angle.main / 2);
    return {
      id: p.id,
      x: p.x,
      y: p.y,
      angle: {
        main: round(p.angle.main),
        prev: p.angle.prev,
        next: p.angle.next,
        bis: p.angle.bis,
        dir: p.angle.dir
      },
      offset: round(p.offset),
      arc: {
        radius: round(p.arc.radius),
        x: p.x + (Math.cos(p.angle.bis) * bislen || 0),
        y: p.y + (Math.sin(p.angle.bis) * bislen || 0)
      },
      in: {
        length: p.in.length,
        x: p.x + Math.cos(p.angle.prev) * p.offset,
        y: p.y + Math.sin(p.angle.prev) * p.offset
      },
      out: {
        length: p.out.length,
        x: p.x + Math.cos(p.angle.next) * p.offset,
        y: p.y + Math.sin(p.angle.next) * p.offset
      },
      get prev() {
        return roundedPoints[(p.id - 1 + len) % len];
      },
      get next() {
        return roundedPoints[(p.id + 1) % len];
      }
    };
  });
  return roundedPoints;
};
const calcLimitRadius = (curr) => {
  const { prev, next } = curr;
  if (prev.locked && !next.locked)
    curr.arc.radius = Math.min(Math.max((curr.out.length - next.arc.lim * next.angle.vel) / curr.angle.vel, curr.out.length / (curr.angle.vel + next.angle.vel)), curr.in.rest / curr.angle.vel, curr.arc.lim);
  else if (next.locked && !prev.locked)
    curr.arc.radius = Math.min(Math.max((curr.in.length - prev.arc.lim * prev.angle.vel) / curr.angle.vel, curr.in.length / (curr.angle.vel + prev.angle.vel)), curr.out.rest / curr.angle.vel, curr.arc.lim);
  else if (next.locked && prev.locked)
    curr.arc.radius = Math.min(curr.in.rest / curr.angle.vel, curr.out.rest / curr.angle.vel, curr.arc.lim);
  else
    curr.arc.radius = Math.min(Math.max((curr.in.length - prev.arc.lim * prev.angle.vel) / curr.angle.vel, curr.in.length / (curr.angle.vel + prev.angle.vel)), Math.max((curr.out.length - next.arc.lim * next.angle.vel) / curr.angle.vel, curr.out.length / (curr.angle.vel + next.angle.vel)), curr.arc.lim);
  lockPoint(curr);
};
const calcCommonRadius = (curr, radius) => {
  if (radius > curr.arc.hit) {
    const { prev, next } = curr;
    if (prev.locked && !next.locked)
      curr.arc.radius = Math.max(Math.min(curr.in.rest / curr.angle.vel, curr.out.length / (curr.angle.vel + next.angle.vel), curr.arc.radius), 0);
    else if (next.locked && !prev.locked)
      curr.arc.radius = Math.max(Math.min(curr.out.rest / curr.angle.vel, curr.in.length / (curr.angle.vel + prev.angle.vel), curr.arc.radius), 0);
    else if (next.locked && prev.locked)
      curr.arc.radius = Math.max(Math.min(curr.in.rest / curr.angle.vel, curr.out.rest / curr.angle.vel, curr.arc.radius), 0);
    else
      curr.arc.radius = curr.arc.hit;
  }
  lockPoint(curr);
};
const lockPoint = (curr) => {
  const { prev, next } = curr;
  curr.offset = curr.arc.radius * curr.angle.vel;
  prev.out.rest -= curr.offset;
  curr.in.rest -= curr.offset;
  curr.out.rest -= curr.offset;
  next.in.rest -= curr.offset;
  curr.locked = true;
  prev.arc.hit = Math.min(prev.in.length / (prev.angle.vel + prev.prev.angle.vel), prev.in.rest / prev.angle.vel, prev.out.rest / prev.angle.vel);
  next.arc.hit = Math.min(next.out.length / (next.angle.vel + next.next.angle.vel), next.out.rest / next.angle.vel, next.in.rest / next.angle.vel);
};
const getMinHit = (arr) => arr.reduce((min, p) => p.locked ? min : !min ? p : p.arc.hit < min.arc.hit ? p : min, null);
const cloud = "";
const CloudLetter = ({
  children: content,
  width,
  spaceWidth = 48,
  cloudHeight = 32,
  padding = 10,
  align = "left",
  mode = "WORD",
  snap = 0,
  grid = false,
  fill = "White",
  stroke = "DodgerBlue",
  strokeWidth = 2,
  shadowOffsetX = -3,
  shadowOffsetY = 5,
  shadowColor = stroke,
  font = {
    color: stroke,
    size: 16,
    family: "sans-serif",
    style: "none",
    variant: "none",
    weight: "none"
  }
}) => {
  const letterRef = useRef(null);
  const everyRef = useRef([]);
  const wordsRef = useRef([]);
  const spacesRef = useRef([]);
  const contentRef = useRef(content);
  const deno = snap ? cloudHeight / snap : 1;
  if (contentRef.current !== content) {
    everyRef.current.length = 0;
    wordsRef.current.length = 0;
    spacesRef.current.length = 0;
    contentRef.current = content;
  }
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  useLayoutEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");
    ctxRef.current.lineJoin = "round";
  }, []);
  useLayoutEffect(() => {
    wordsRef.current.forEach((span) => span.style.width = "");
    everyRef.current.forEach((span) => span.style.left = "");
    if (snap) {
      wordsRef.current.forEach((span) => {
        let {
          width: w
        } = span.getBoundingClientRect();
        w = Math.ceil(w / deno) * deno;
        span.style.width = `${w}px`;
      });
      if (align === "center") {
        const {
          top: top2,
          left: left2
        } = letterRef.current.getBoundingClientRect();
        let yh = NaN, xo = NaN;
        everyRef.current.forEach((span) => {
          let {
            x,
            y
          } = span.getBoundingClientRect();
          x -= left2;
          y -= top2;
          if (y !== yh) {
            yh = y;
            xo = -(x % deno / deno) * deno;
          }
          span.style.left = `${xo}px`;
        });
      }
    }
    const {
      height,
      top,
      left
    } = letterRef.current.getBoundingClientRect();
    const clouds = mode === "WORD" || mode === "PARTIAL" ? wordsRef.current.filter((span) => !span.idle) : spacesRef.current;
    const cloudRects = clouds.map((span) => {
      let {
        x,
        y,
        width: w,
        height: h
      } = span.getBoundingClientRect();
      x -= left;
      y -= top;
      return [[[x, y], [x + w, y], [x + w, y + h], [x, y + h]]];
    });
    const multiRoundedPolies = cloudRects.length ? index.union(...cloudRects).map((merged) => merged.map((poly) => {
      poly.pop();
      return poly.map((p) => ({
        x: p[0],
        y: p[1]
      }));
    })).map((polies) => polies.map((poly) => roundPolygon(poly, cloudHeight / (snap === 1 ? 2 : 4)))) : [];
    const pr = window.devicePixelRatio;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const l = strokeWidth;
    const sx = shadowOffsetX;
    const sy = shadowOffsetY;
    const _width = width + (Math.abs(sx) > l / 2 ? Math.abs(sx) + l / 2 : l);
    const _height = height + (Math.abs(sy) > l / 2 ? Math.abs(sy) + l / 2 : l);
    canvas.width = _width * pr;
    canvas.height = _height * pr;
    canvas.style.width = `${_width}px`;
    canvas.style.height = `${_height}px`;
    canvas.style.top = `${sy < 0 ? -sy > l / 2 ? sy : -l / 2 : -l / 2}px`;
    canvas.style.left = `${sx < 0 ? -sx > l / 2 ? sx : -l / 2 : -l / 2}px`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (l > 0)
      ctx.lineWidth = l * pr;
    else
      ctx.strokeStyle = "transparent";
    const offsetY = sy < 0 ? -sy > l / 2 ? -sy : l / 2 : l / 2;
    const offsetX = sx < 0 ? -sx > l / 2 ? -sx : l / 2 : l / 2;
    ctx.fillStyle = shadowColor;
    l > 0 && (ctx.strokeStyle = shadowColor);
    ctx.translate((offsetX + sx) * pr, (offsetY + sy) * pr);
    fillPolies(ctx, multiRoundedPolies, pr);
    ctx.fillStyle = fill;
    l > 0 && (ctx.strokeStyle = stroke);
    ctx.translate(-sx * pr, -sy * pr);
    fillPolies(ctx, multiRoundedPolies, pr);
    snap && grid && canvasDebug(ctx, width, height, align, snap, cloudRects);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });
  const cloudMapper = getCloudMapper(mode);
  if (typeof content === "string") {
    content = split$1(content, mode).map(cloudMapper);
  } else if (Array.isArray(content)) {
    content = content.reduce((acc, element, i) => {
      typeof element === "string" ? split$1(element, mode).forEach((idles, j) => acc.push(cloudMapper(idles, `${i}-${j}`))) : acc.push(element);
      return acc;
    }, []);
  }
  return /* @__PURE__ */ jsxs("p", {
    ref: letterRef,
    className: "cloud-letter",
    style: {
      "width": `${width}px`,
      "--gap": `${snap ? Math.ceil(spaceWidth / deno) * deno : spaceWidth}px`,
      "--height": `${cloudHeight}px`,
      "--padding": `0 ${padding}px`,
      "--padding-idle": `0 ${mode === "PARTIAL" ? 0 : padding}px`,
      "--margin-partial": `0 ${mode === "PARTIAL" && snap === 0 ? font.size / 4 : 0}px`,
      "--align": align,
      "--color": font.color,
      "--font-size": `${font.size}px`,
      "--font-family": font.family,
      "--font-style": font.style,
      "--font-variant": font.variant,
      "--font-weight": font.weight
    },
    children: [/* @__PURE__ */ jsx(cloudContext.Provider, {
      value: {
        every: everyRef.current,
        words: wordsRef.current,
        spaces: spacesRef.current
      },
      children: content
    }), /* @__PURE__ */ jsx("canvas", {
      ref: canvasRef,
      className: "cloud-canvas"
    })]
  });
};
export {
  CloudLetter,
  CloudWord
};
