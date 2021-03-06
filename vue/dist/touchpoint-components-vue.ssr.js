'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
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
var script = {
  name: 'CheckboxButton',
  props: {
    model: [String, Boolean, Object, Number, Array],
    value: {
      type: [String, Boolean, Object, Number]
    },
    label: {
      type: String,
      default: null
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  computed: {
    attrs: function attrs() {
      var attrs = {
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        'true-value': this.trueValue,
        'false-value': this.falseValue
      };

      if (Object.hasOwnProperty.call(this.$options.propsData, 'value')) {
        if (this.value === null || _typeof(this.value) !== 'object') {
          attrs.value = this.value === null || this.value === undefined ? '' : String(this.value);
        }
      }

      return attrs;
    },
    isSelected: function isSelected() {
      if (this.isModelArray) {
        return this.model.includes(this.value);
      }

      if (this.hasValue) {
        return this.model === this.value;
      }

      return this.model === this.trueValue;
    },
    isModelArray: function isModelArray() {
      return Array.isArray(this.model);
    },
    hasValue: function hasValue() {
      return Object.hasOwnProperty.call(this.$options.propsData, 'value');
    }
  },
  methods: {
    removeItemFromModel: function removeItemFromModel(newModel) {
      var index = newModel.indexOf(this.value);

      if (index !== -1) {
        newModel.splice(index, 1);
      }
    },
    handleArrayCheckbox: function handleArrayCheckbox() {
      var newModel = this.model;

      if (!this.isSelected) {
        newModel.push(this.value);
      } else {
        this.removeItemFromModel(newModel);
      }

      this.$emit('change', newModel);
    },
    handleSingleSelectCheckbox: function handleSingleSelectCheckbox() {
      this.$emit('change', this.isSelected ? null : this.value);
    },
    handleSimpleCheckbox: function handleSimpleCheckbox() {
      this.$emit('change', this.isSelected ? this.falseValue : this.trueValue);
    },
    toggleCheck: function toggleCheck() {
      if (!this.disabled) {
        if (this.isModelArray) {
          this.handleArrayCheckbox();
        } else if (this.hasValue) {
          this.handleSingleSelectCheckbox();
        } else {
          this.handleSimpleCheckbox();
        }
      }
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

  return _c('label', {
    staticClass: "checkbox-button"
  }, [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("checked", _vm.isSelected) + _vm._ssrAttrs(_vm.attrs) + "> "), _vm._ssrNode("<span class=\"label\">", "</span>", [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-53d6bfd2_0", {
    source: ".checkbox-button[data-v-53d6bfd2]{--checkbox-btn-color-border:var(--color-ash, #555);--checkbox-btn-color-bg:var(--color-chalk, #efefef);--checkbox-btn-color-text:var(--color-black, #000);cursor:pointer;user-select:none;display:inline-block}.label[data-v-53d6bfd2]{display:inline-block;border:1px solid var(--checkbox-btn-color-border);padding:.4em 1.6em;border-radius:1em;font-size:var(--checkbox-font-size,1.25rem)}input[data-v-53d6bfd2]{display:none}input:checked+.label[data-v-53d6bfd2]{color:var(--checkbox-btn-color-text);background-color:var(--checkbox-btn-color-bg)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-53d6bfd2";
/* module identifier */

var __vue_module_identifier__ = "data-v-53d6bfd2";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'ButtonCallToAction',
  props: {
    modifier: {
      type: [String, Array],
      default: null,
      validator: function validator(value) {
        var acceptedValues = ['small', 'full', 'special-case-1'];

        if (typeof value === 'string') {
          return acceptedValues.includes(value);
        }

        var checkArray = [];
        value.forEach(function (item) {
          checkArray.push(acceptedValues.includes(item));
        });
        return checkArray.every(function (item) {
          return item;
        });
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
      defaultStyles: {}
    };
  },
  computed: {
    modifierClasses: function modifierClasses() {
      if (this.modifier) {
        var classArray = typeof this.modifier === 'string' ? new Array(this.modifier) : _toConsumableArray(this.modifier);
        return classArray.map(function (modifier) {
          return "btn--".concat(modifier);
        });
      }

      return null;
    },
    cssVars: function cssVars() {
      return _objectSpread2({}, this.defaultStyles, {}, this.additionalStyles);
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "btn",
    class: _vm.modifierClasses,
    style: _vm.cssVars
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5c290dc5_0", {
    source: ".btn[data-v-5c290dc5]{border:none;font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-webkit-appearance:button;--btn-color-bg:var(--color-orange, #ED6A12);--btn-color-text:var(--color-white, #fff);--btn-font-size:var(--font-size-normal);--btn-height:5rem;--btn-width:100%;--btn-small-modifier-scale:0.78;font-size:var(--btn-font-size);display:inline-block;background:var(--btn-color-bg);color:var(--btn-color-text);height:var(--btn-height);max-width:var(--btn-width);width:var(--btn-width);border-radius:.625rem;padding:0 1em}@media (min-width:28.125rem){.btn[data-v-5c290dc5]{--btn-width:28.125rem}}.btn--full[data-v-5c290dc5]{--btn-width:100%}.btn--small[data-v-5c290dc5]{height:calc(var(--btn-height) * var(--btn-small-modifier-scale));max-width:calc(var(--btn-width) * var(--btn-small-modifier-scale));font-size:calc(var(--btn-font-size) * var(--btn-small-modifier-scale))}.btn--special-case-1[data-v-5c290dc5]{--btn-color-bg:var(--color-white, #fff);--btn-color-text:var(--color-black, #000)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-5c290dc5";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-5c290dc5";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
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
var script$2 = {
  name: 'AnimationSatellite',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
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

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6d475c4c_0", {
    source: ".satellite[data-v-6d475c4c]{position:absolute;left:50%;top:50%;width:4em;height:4em;margin-left:-2em;margin-top:-2em;pointer-events:none}.satellite span[data-v-6d475c4c]{position:absolute;width:1em;height:1em;border-radius:50%;margin-top:-.5em;margin-left:-.5em;transition:all ease .5s;transform-origin:center 0;transform:translate(0,0) scale(0);animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-duration:1.5s;animation-fill-mode:forwards}.satellite.animation span[data-v-6d475c4c]:nth-child(1){top:0;left:50%;background:#988ade;animation-name:satellite-top-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(2){top:25%;left:100%;background:#de8aa0;animation-name:satellite-top-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(3){top:75%;left:100%;background:#8aaede;animation-name:satellite-bottom-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(4){top:100%;left:50%;background:#8adead;animation-name:satellite-bottom-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(5){top:75%;left:0;background:#dec58a;animation-name:satellite-bottom-left-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(6){top:25%;left:0;background:#8ad1de;animation-name:satellite-top-left-data-v-6d475c4c}@keyframes satellite-top-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,-3.1305903399em)}}@keyframes satellite-top-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,-7em)}}@keyframes satellite-top-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,-3.1305903399em)}}@keyframes satellite-bottom-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,3.1305903399em)}}@keyframes satellite-bottom-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,7em)}}@keyframes satellite-bottom-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,3.1305903399em)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = "data-v-6d475c4c";
/* module identifier */

var __vue_module_identifier__$2 = "data-v-6d475c4c";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);var IconVote1 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 41.013c7.054-7.164 13.984-7.164 21.632.047a1.813 1.813 0 002.487-2.638c-9.062-8.543-18.243-8.543-26.702.047a1.813 1.813 0 002.583 2.544z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}})])])
      }
    
      };var IconVote2 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}}),_c('path',{attrs:{"d":"M23.969 42.222c.416-.25.184-.328.317-.363l-.317-.663c-.417.429-1.615 1.445-1.615 2.304 0 1.001.812 1.813 1.813 1.813.942 0 1.19-.206 2.22-1.277.966-1.004 1.03-1.069 1.495-1.47.941-.812 1.897-1.37 2.957-1.654 2.162-.58 4.64-.58 7.447.022a1.813 1.813 0 00.76-3.545c-3.342-.717-6.397-.717-9.148.022-1.643.441-3.06 1.268-4.385 2.412-.587.506-.48.268-1.544 1.373-.19.198.07.845 0 .905v.12z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };var IconVote3 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}}),_c('path',{attrs:{"d":"M18.125 40.194h21.75a1.813 1.813 0 000-3.625h-21.75a1.813 1.813 0 000 3.625z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };var IconVote4 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 37.395c7.054 7.164 13.984 7.164 21.632-.047a1.812 1.812 0 112.487 2.637c-9.062 8.544-18.243 8.544-26.702-.047a1.813 1.813 0 012.583-2.543z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}})])])
      }
    
      };var IconVote5 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 37.395c7.054 7.164 13.984 7.164 21.632-.047a1.812 1.812 0 112.487 2.637c-9.062 8.544-18.243 8.544-26.702-.047a1.813 1.813 0 012.583-2.543zm-2.087-13.626c.93-1.86 1.693-2.623 2.004-2.623.31 0 1.074.763 2.004 2.623a1.812 1.812 0 003.242-1.621c-1.487-2.974-3.14-4.627-5.246-4.627-2.106 0-3.76 1.653-5.246 4.627a1.812 1.812 0 103.242 1.62zm21.75 0c.93-1.86 1.693-2.623 2.004-2.623.31 0 1.074.763 2.004 2.623a1.812 1.812 0 003.242-1.621c-1.487-2.974-3.14-4.627-5.246-4.627-2.106 0-3.76 1.653-5.246 4.627a1.812 1.812 0 103.242 1.62z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };/**
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

var script$3 = {
  name: 'AppRating',
  components: {
    AnimationSatellite: __vue_component__$2,
    IconVote1: IconVote1,
    IconVote2: IconVote2,
    IconVote3: IconVote3,
    IconVote4: IconVote4,
    IconVote5: IconVote5
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
        title: this.getVoteTitles(count),
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
    },
    getVoteTitles: function getVoteTitles(vote) {
      var titles = ['nicht so gut', 'naja', 'ok', 'gut', 'sehr gut'];
      return titles[vote];
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
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
    return _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.isVoted) + _vm._ssrAttr("aria-label", "Bewerte mit " + icon.title) + _vm._ssrClass("vote vote--up", [{
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

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-49ecdc8f_0", {
    source: ".rating[data-v-49ecdc8f]{display:grid;grid-gap:1em;align-items:center;font-size:var(--voting-font-size)}@media (min-width:600px){.rating[data-v-49ecdc8f]{grid-template-columns:auto 1fr}}.rating--block[data-v-49ecdc8f]{grid-template-columns:1fr;grid-row-gap:0}.rating__buttons[data-v-49ecdc8f]{display:grid;grid-template-columns:repeat(var(--voting-icon-count),3.625rem);grid-gap:1em}.vote[data-v-49ecdc8f]{border:none;font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-webkit-appearance:button;position:relative;background:0 0;display:inline-block;outline:0}.vote.animation[data-v-49ecdc8f]{animation:icon-animation-data-v-49ecdc8f cubic-bezier(.165,.84,.44,1) 1.2s}.vote.animation[data-v-49ecdc8f],.vote[data-v-49ecdc8f]:focus{--vote-color:var(--color-green, #00BAA7)}.vote--1.animation[data-v-49ecdc8f],.vote--1[data-v-49ecdc8f]:focus{--vote-color:var(--color-cherry, #C33546)}.vote--2.animation[data-v-49ecdc8f],.vote--2[data-v-49ecdc8f]:focus,.vote--3.animation[data-v-49ecdc8f],.vote--3[data-v-49ecdc8f]:focus{--vote-color:var(--color-curry, #F5A323)}@keyframes icon-animation-data-v-49ecdc8f{0%{transform:scale(0)}100%{transform:scale(1)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-49ecdc8f";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-49ecdc8f";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);var IconClose = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 48 48"}},[_c('path',{attrs:{"d":"M43.644.785L24 20.43 4.356.785a2.525 2.525 0 10-3.57 3.571L20.428 24 .785 43.644a2.525 2.525 0 003.571 3.57L24 27.572l19.644 19.644a2.525 2.525 0 103.57-3.571L27.572 24 47.215 4.356a2.525 2.525 0 00-3.571-3.57z","fill":"#FFF","fill-rule":"evenodd"}})])
      }
    
      };var script$4 = {
  name: 'AppOverlay',
  components: {
    IconClose: IconClose
  },
  props: {
    headline: {
      type: String,
      default: null
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    additionalStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isFull: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showOverlay: this.isVisible,
      defaultStyles: {
        '--overlay-color-text': '#fff',
        '--overlay-color-background': this.isFull ? 'transparen' : '#1a1a1a',
        '--overlay-headline-size': '4rem',
        '--overlay-close-size': '50px',
        '--overlay-border-radius': '1em',
        '--overlay-padding': '1em',
        '--overlay-width': this.isFull ? '100%' : '90vw',
        '--overlay-max-width': this.isFull ? 'none' : '1930px',
        '--overlay-content-height': this.isFull ? '1fr' : 'auto'
      }
    };
  },
  computed: {
    cssVars: function cssVars() {
      return _objectSpread2({}, this.defaultStyles, {}, this.additionalStyles);
    }
  },
  methods: {
    close: function close() {
      this.showOverlay = false;
      this.$emit('close');
    }
  },
  watch: {
    showOverlay: function showOverlay(isOpen) {
      if (isOpen) {
        document.body.classList.add('overlay-open');
      } else {
        document.body.classList.remove('overlay-open');
      }
    },
    isVisible: function isVisible(isOpen) {
      this.showOverlay = isOpen;
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": "modal-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showOverlay,
      expression: "showOverlay"
    }],
    staticClass: "overlay",
    class: {
      'overlay--full': _vm.isFull
    },
    style: _vm.cssVars
  }, [_c('div', {
    staticClass: "overlay__inner",
    attrs: {
      "role": "dialog",
      "aria-labelledby": "modalTitle",
      "aria-describedby": "modalDescription"
    }
  }, [_c('h1', {
    staticClass: "overlay__headline",
    attrs: {
      "id": "modalTitle"
    }
  }, [_vm._v(_vm._s(_vm.headline))]), _vm._v(" "), _c('button', {
    staticClass: "overlay__close",
    attrs: {
      "aria-label": "Overlay schliessen"
    },
    on: {
      "click": _vm.close
    }
  }, [_c('icon-close', {
    staticClass: "overlay__close-icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "overlay__content",
    attrs: {
      "id": "modalDescription"
    }
  }, [_vm._t("default")], 2)])])]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2a24b326_0", {
    source: ".overlay-open{overflow:hidden}",
    map: undefined,
    media: undefined
  }), inject("data-v-2a24b326_1", {
    source: ".modal-fade-enter[data-v-2a24b326],.modal-fade-leave-active[data-v-2a24b326]{opacity:0}.modal-fade-enter-active[data-v-2a24b326],.modal-fade-leave-active[data-v-2a24b326]{transition:opacity .5s ease}.overlay[data-v-2a24b326]{display:flex;justify-content:center;align-items:center;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.9);z-index:100;color:var(--overlay-color-text)}.overlay--full[data-v-2a24b326]{align-items:start}.overlay__inner[data-v-2a24b326]{width:var(--overlay-width);max-width:var(--overlay-max-width);display:grid;grid:\". close\" auto \"headline headline\" auto \"content content\" var(--overlay-content-height)/1fr auto;max-height:100vh;overflow:auto;background:var(--overlay-color-background);border-radius:var(--overlay-border-radius);padding:var(--overlay-padding)}.overlay__content[data-v-2a24b326]{grid-area:content}.overlay__headline[data-v-2a24b326]{grid-area:headline;font-size:var(--overlay-headline-size);font-weight:700}.overlay__close[data-v-2a24b326]{grid-area:close;background:0 0;border:0;appearance:none;align-self:start;margin-bottom:2em}.overlay__close-icon[data-v-2a24b326]{width:var(--overlay-close-size)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-2a24b326";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-2a24b326";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//

/**
 * Add one or more listeners to an element
 * @param {Element|object} element - DOM element to add listeners to
 * @param {string} eventNames - space separated list of event names, e.g. 'click change'
 * @param {Function} listener - function to attach for each event as a listener
 * @Link
 * http://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
 */
function addListenerMulti(element, eventNames, listener) {
  [].forEach.call(eventNames.split(' '), function (e) {
    element.addEventListener(e, listener, true);
  });
}

function removeListenerMulti(element, eventNames, listener) {
  [].forEach.call(eventNames.split(' '), function (e) {
    element.removeEventListener(e, listener, true);
  });
}

var script$5 = {
  name: 'RedirectTimer',
  props: {
    /**
     * Countdown in Seconds
     */
    countdown: {
      type: Number,
      default: 1800
    },
    routerName: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: '/'
    },
    show: {
      type: Boolean,
      default: false
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isRunning: false,
      timer: null,
      time: this.countdown
    };
  },
  mounted: function mounted() {
    this.stop();
    this.timer = null;
    addListenerMulti(window, 'keydown click scroll pauseRedirectTimer', this.eventHandling);

    if (this.autoStart) {
      this.start();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.stop();
    clearInterval(this.timer);
  },
  destroyed: function destroyed() {
    removeListenerMulti(window, 'keydown click scroll pauseRedirectTimer', this.eventHandling);
    this.$destroy();
  },
  methods: {
    eventHandling: function eventHandling() {
      if (this.timer) {
        this.resume(true);
      } else {
        this.start();
      }
    },
    start: function start() {
      var _this = this;

      this.isRunning = true;

      if (!this.timer) {
        this.timer = setInterval(function () {
          if (_this.time > 0) {
            _this.$root.$emit('countdown-tick', _this.time);

            _this.time -= 1;
          } else {
            clearInterval(_this.timer);

            _this.reset();
          }
        }, 1000);
      }
    },
    resume: function resume() {
      this.reset(true);
      this.start();
    },
    stop: function stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
    },
    reset: function reset() {
      var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.stop();

      if (initial) {
        this.time = this.countdown;
      } else {
        this.time = 0;

        if (this.routerName) {
          this.$emit('redirect', {
            name: this.routerName
          });

          if (this.$route.name === this.routerName) {
            this.$router.go(0);
          } else {
            this.$router.push({
              name: this.routerName,
              params: {
                redirect: {
                  name: this.routerName
                }
              }
            });
          }
        } else {
          this.$emit('redirect', {
            url: this.url
          });

          if (this.$route.path === this.url) {
            this.$router.go(0);
          } else {
            this.$router.push({
              path: this.url
            });
          }
        }
      }
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._t("default"), _vm._ssrNode(" " + (_vm.show ? _vm._ssrEscape("\n  " + _vm._s(_vm.time) + "\n  ") : "<!---->"))], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-03e0b524";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);// eslint-disable linebreak-style
var components=/*#__PURE__*/Object.freeze({__proto__:null,CheckboxButton: __vue_component__,ButtonCallToAction: __vue_component__$1,AnimationSatellite: __vue_component__$2,AppRating: __vue_component__$3,AppOverlay: __vue_component__$4,RedirectTimer: __vue_component__$5});var install = function installTouchpointComponentsVue(Vue) {
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
exports.AnimationSatellite=__vue_component__$2;exports.AppOverlay=__vue_component__$4;exports.AppRating=__vue_component__$3;exports.ButtonCallToAction=__vue_component__$1;exports.CheckboxButton=__vue_component__;exports.RedirectTimer=__vue_component__$5;exports.default=plugin;