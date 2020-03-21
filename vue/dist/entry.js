'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'AnimationSatellite',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "satellite",
    class: {
      'animation': _vm.animation
    }
  }, [_vm._ssrNode("<span></span> <span></span> <span></span> <span></span> <span></span> <span></span>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6d475c4c_0", {
    source: ".satellite[data-v-6d475c4c]{position:absolute;left:50%;top:50%;width:4em;height:4em;margin-left:-2em;margin-top:-2em;pointer-events:none}.satellite span[data-v-6d475c4c]{position:absolute;width:1em;height:1em;border-radius:50%;margin-top:-.5em;margin-left:-.5em;transition:all ease .5s;transform-origin:center 0;transform:translate(0,0) scale(0);animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-duration:1.5s;animation-fill-mode:forwards}.satellite.animation span[data-v-6d475c4c]:nth-child(1){top:0;left:50%;background:#988ade;animation-name:satellite-top-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(2){top:25%;left:100%;background:#de8aa0;animation-name:satellite-top-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(3){top:75%;left:100%;background:#8aaede;animation-name:satellite-bottom-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(4){top:100%;left:50%;background:#8adead;animation-name:satellite-bottom-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(5){top:75%;left:0;background:#dec58a;animation-name:satellite-bottom-left-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(6){top:25%;left:0;background:#8ad1de;animation-name:satellite-top-left-data-v-6d475c4c}@keyframes satellite-top-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,-3.1305903399em)}}@keyframes satellite-top-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,-7em)}}@keyframes satellite-top-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,-3.1305903399em)}}@keyframes satellite-bottom-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,3.1305903399em)}}@keyframes satellite-bottom-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,7em)}}@keyframes satellite-bottom-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,3.1305903399em)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-6d475c4c";
/* module identifier */

var __vue_module_identifier__ = "data-v-6d475c4c";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/**
 * Filter Even Elements
 * normally even numbers have the feature that number % 2 === 0;
 * JavaScript is, however, zero-based, so want those elements with a modulo of 1:
 */

var filterEvenElement = function filterEvenElement() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return array.filter(function (item, index) {
    return index % 2 === 0;
  });
};

var script$1 = {
  name: 'AppRating',
  components: {
    AnimationSatellite: __vue_component__,
    IconVote1: function IconVote1() {
      return new Promise(function(c){c(require('./icon-vote-1-92cbc197.js'));});
    },
    IconVote2: function IconVote2() {
      return new Promise(function(c){c(require('./icon-vote-2-4f57d972.js'));});
    },
    IconVote3: function IconVote3() {
      return new Promise(function(c){c(require('./icon-vote-3-1ed4ca89.js'));});
    },
    IconVote4: function IconVote4() {
      return new Promise(function(c){c(require('./icon-vote-4-7d38f1e5.js'));});
    },
    IconVote5: function IconVote5() {
      return new Promise(function(c){c(require('./icon-vote-5-420e3b6a.js'));});
    }
  },
  props: {
    name: {
      type: String,
      default: null
    },
    isVoted: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    numberOfVotings: {
      type: Number,
      default: 5,
      validator: function validator(value) {
        var acceptedValues = [2, 3, 5];
        return acceptedValues.includes(value);
      }
    },
    modifier: {
      type: String,
      default: null,
      validator: function validator(value) {
        var acceptedValues = ['block'];
        return acceptedValues.includes(value);
      }
    },
    additionalStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      vote: null,
      components: [],
      defaultStyles: {
        '--voting-icon-count': this.numberOfVotings,
        '--voting-font-size': 'var(--font-size-normal, 30px)',
        '--icon-size': '3.625rem',
        // 58px
        '--vote-color': '#fff'
      }
    };
  },
  computed: {
    cssVars: function cssVars() {
      return _objectSpread2({}, this.defaultStyles, {}, this.additionalStyles);
    }
  },
  created: function created() {
    /* const components = [
      {
        index: 1,
        component: () => import('../img/icon-vote-1.svg'),
      },
      {
        index: 2,
        component: () => import('../img/icon-vote-2.svg')
      },
      {
        index: 3,
        component: () => import('../img/icon-vote-3.svg')
      },
      {
        index: 4,
        component: () => import('../img/icon-vote-4.svg')
      },
      {
        index: 5,
        component: () => import('../img/icon-vote-5.svg')
      },
    ]; */
    var components = [];

    for (var count = 0; count < 5; count += 1) {
      var countNumber = count + 1; // Runs 5 times, with values of step 0 through 4.

      components[count] = {
        index: countNumber,
        // component: () => import(`@/img/icon-vote-${countNumber}.svg`),
        component: "IconVote".concat(countNumber)
      };
    }

    if (this.numberOfVotings === 5) {
      this.components = components;
    } else if (this.numberOfVotings === 3) {
      this.components = filterEvenElement(components);
    } else {
      var filtered = filterEvenElement(components); // For only 2 votings, filter and remove middle

      filtered.splice(1, 1);
      this.components = filtered;
    }
  },
  methods: {
    saveVote: function saveVote(count) {
      this.vote = count;
      this.$emit('success', this.vote);
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "rating",
    class: _vm.modifier ? "rating--" + _vm.modifier : null,
    style: _vm.cssVars
  }, [_vm._ssrNode((_vm.description ? "<p class=\"rating__description\">" + _vm._ssrEscape(_vm._s(_vm.description)) + "</p>" : "<!---->") + " "), _vm.components ? _vm._ssrNode("<div class=\"rating__buttons\"" + _vm._ssrStyle(null, {
    '--voting-icon-count': _vm.numberOfVotings
  }, null) + ">", "</div>", _vm._l(_vm.components, function (icon) {
    return _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.isVoted) + _vm._ssrClass("vote vote--up", [{
      'animation': _vm.vote === icon.index
    }, "vote--" + icon.index]) + ">", "</button>", [_c(icon.component, {
      tag: "component",
      staticClass: "rating__icon"
    }), _vm._ssrNode(" "), _c('animation-satellite', {
      attrs: {
        "animation": _vm.vote === icon.index
      }
    })], 2);
  }), 0) : _vm._e()], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2d81dd11_0", {
    source: ".rating[data-v-2d81dd11]{--color-green:var(--color-green, $color-green);--color-cherry:var(--color-cherry, $color-cherry);--color-curry:var(--color-curry, $color-curry);display:grid;grid-gap:1em;align-items:center;font-size:var(--voting-font-size)}@media (min-width:600px){.rating[data-v-2d81dd11]{grid-template-columns:auto 1fr}}.rating--block[data-v-2d81dd11]{grid-template-columns:1fr}.rating__buttons[data-v-2d81dd11]{display:grid;grid-template-columns:repeat(var(--voting-icon-count),3.625rem);grid-gap:1em}.vote[data-v-2d81dd11]{border:none;font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-webkit-appearance:button;position:relative;background:0 0;display:inline-block;outline:0}.vote.animation[data-v-2d81dd11]{animation:icon-animation-data-v-2d81dd11 cubic-bezier(.165,.84,.44,1) 1.2s}.vote.animation[data-v-2d81dd11],.vote[data-v-2d81dd11]:focus{--vote-color:var(--color-green)}.vote--1.animation[data-v-2d81dd11],.vote--1[data-v-2d81dd11]:focus{--vote-color:var(--color-cherry)}.vote--2.animation[data-v-2d81dd11],.vote--2[data-v-2d81dd11]:focus,.vote--3.animation[data-v-2d81dd11],.vote--3[data-v-2d81dd11]:focus{--vote-color:var(--color-curry)}@keyframes icon-animation-data-v-2d81dd11{0%{transform:scale(0)}100%{transform:scale(1)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-2d81dd11";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-2d81dd11";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,AnimationSatellite: __vue_component__,AppRating: __vue_component__$1});var install = function installTouchpointComponentsVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()
exports.AnimationSatellite=__vue_component__;exports.AppRating=__vue_component__$1;exports.default=plugin;