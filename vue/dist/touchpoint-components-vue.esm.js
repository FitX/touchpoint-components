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
//
var script = {
  name: 'AnimationSatellite',
  props: {
    animation: {
      type: Boolean,
      default: false
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "satellite",
    class: {
      'animation': _vm.animation
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6d475c4c_0", {
    source: ".satellite[data-v-6d475c4c]{position:absolute;left:50%;top:50%;width:4em;height:4em;margin-left:-2em;margin-top:-2em;pointer-events:none}.satellite span[data-v-6d475c4c]{position:absolute;width:1em;height:1em;border-radius:50%;margin-top:-.5em;margin-left:-.5em;transition:all ease .5s;transform-origin:center 0;transform:translate(0,0) scale(0);animation-timing-function:cubic-bezier(.165,.84,.44,1);animation-duration:1.5s;animation-fill-mode:forwards}.satellite.animation span[data-v-6d475c4c]:nth-child(1){top:0;left:50%;background:#988ade;animation-name:satellite-top-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(2){top:25%;left:100%;background:#de8aa0;animation-name:satellite-top-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(3){top:75%;left:100%;background:#8aaede;animation-name:satellite-bottom-right-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(4){top:100%;left:50%;background:#8adead;animation-name:satellite-bottom-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(5){top:75%;left:0;background:#dec58a;animation-name:satellite-bottom-left-data-v-6d475c4c}.satellite.animation span[data-v-6d475c4c]:nth-child(6){top:25%;left:0;background:#8ad1de;animation-name:satellite-top-left-data-v-6d475c4c}@keyframes satellite-top-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,-3.1305903399em)}}@keyframes satellite-top-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,-7em)}}@keyframes satellite-top-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,-3.1305903399em)}}@keyframes satellite-bottom-right-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(6.2611806798em,3.1305903399em)}}@keyframes satellite-bottom-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(0,7em)}}@keyframes satellite-bottom-left-data-v-6d475c4c{0%{transform:scale(1) translate(0,0)}100%{transform:scale(0) translate(-6.2611806798em,3.1305903399em)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6d475c4c";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var IconVote1 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 41.013c7.054-7.164 13.984-7.164 21.632.047a1.813 1.813 0 002.487-2.638c-9.062-8.543-18.243-8.543-26.702.047a1.813 1.813 0 002.583 2.544z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}})])])
      }
    
      };

var IconVote2 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}}),_c('path',{attrs:{"d":"M23.969 42.222c.416-.25.184-.328.317-.363l-.317-.663c-.417.429-1.615 1.445-1.615 2.304 0 1.001.812 1.813 1.813 1.813.942 0 1.19-.206 2.22-1.277.966-1.004 1.03-1.069 1.495-1.47.941-.812 1.897-1.37 2.957-1.654 2.162-.58 4.64-.58 7.447.022a1.813 1.813 0 00.76-3.545c-3.342-.717-6.397-.717-9.148.022-1.643.441-3.06 1.268-4.385 2.412-.587.506-.48.268-1.544 1.373-.19.198.07.845 0 .905v.12z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };

var IconVote3 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}}),_c('path',{attrs:{"d":"M18.125 40.194h21.75a1.813 1.813 0 000-3.625h-21.75a1.813 1.813 0 000 3.625z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };

var IconVote4 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 37.395c7.054 7.164 13.984 7.164 21.632-.047a1.812 1.812 0 112.487 2.637c-9.062 8.544-18.243 8.544-26.702-.047a1.813 1.813 0 012.583-2.543z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"18.125","cy":"22.958","r":"3.625"}}),_c('circle',{attrs:{"fill":"var(--vote-color, #fff)","cx":"39.875","cy":"22.958","r":"3.625"}})])])
      }
    
      };

var IconVote5 = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 62 62"}},[_c('g',{attrs:{"transform":"translate(2 2)","fill":"none","fill-rule":"evenodd","opacity":".75"}},[_c('circle',{attrs:{"stroke":"var(--vote-color, #fff)","stroke-width":"3","cx":"29","cy":"29","r":"29"}}),_c('path',{attrs:{"d":"M18.208 37.395c7.054 7.164 13.984 7.164 21.632-.047a1.812 1.812 0 112.487 2.637c-9.062 8.544-18.243 8.544-26.702-.047a1.813 1.813 0 012.583-2.543zm-2.087-13.626c.93-1.86 1.693-2.623 2.004-2.623.31 0 1.074.763 2.004 2.623a1.812 1.812 0 003.242-1.621c-1.487-2.974-3.14-4.627-5.246-4.627-2.106 0-3.76 1.653-5.246 4.627a1.812 1.812 0 103.242 1.62zm21.75 0c.93-1.86 1.693-2.623 2.004-2.623.31 0 1.074.763 2.004 2.623a1.812 1.812 0 003.242-1.621c-1.487-2.974-3.14-4.627-5.246-4.627-2.106 0-3.76 1.653-5.246 4.627a1.812 1.812 0 103.242 1.62z","fill":"var(--vote-color, #fff)","fill-rule":"nonzero"}})])])
      }
    
      };

//
/**
 * Filter Even Elements
 * normally even numbers have the feature that number % 2 === 0;
 * JavaScript is, however, zero-based, so want those elements with a modulo of 1:
 */

const filterEvenElement = (array = []) => array.filter((item, index) => index % 2 === 0);

var script$1 = {
  name: 'AppRating',
  components: {
    AnimationSatellite: __vue_component__,
    IconVote1,
    IconVote2,
    IconVote3,
    IconVote4,
    IconVote5
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
      validator: value => {
        const acceptedValues = [2, 3, 5];
        return acceptedValues.includes(value);
      }
    },
    modifier: {
      type: String,
      default: null,
      validator: value => {
        const acceptedValues = ['block'];
        return acceptedValues.includes(value);
      }
    },
    additionalStyles: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
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
    cssVars() {
      return { ...this.defaultStyles,
        ...this.additionalStyles
      };
    }

  },

  created() {
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
    const components = [];

    for (let count = 0; count < 5; count += 1) {
      const countNumber = count + 1; // Runs 5 times, with values of step 0 through 4.

      components[count] = {
        index: countNumber,
        title: this.getVoteTitles(count),
        // component: () => import(`@/img/icon-vote-${countNumber}.svg`),
        component: `IconVote${countNumber}`
      };
    }

    if (this.numberOfVotings === 5) {
      this.components = components;
    } else if (this.numberOfVotings === 3) {
      this.components = filterEvenElement(components);
    } else {
      const filtered = filterEvenElement(components); // For only 2 votings, filter and remove middle

      filtered.splice(1, 1);
      this.components = filtered;
    }
  },

  methods: {
    saveVote(count) {
      this.vote = count;
      this.$emit('success', this.vote);
    },

    getVoteTitles(vote) {
      const titles = ['nicht so gut', 'naja', 'ok', 'gut', 'sehr gut'];
      return titles[vote];
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "rating",
    class: _vm.modifier ? "rating--" + _vm.modifier : null,
    style: _vm.cssVars
  }, [_vm.description ? _c('p', {
    staticClass: "rating__description"
  }, [_vm._v(_vm._s(_vm.description))]) : _vm._e(), _vm._v(" "), _vm.components ? _c('div', {
    staticClass: "rating__buttons",
    style: {
      '--voting-icon-count': _vm.numberOfVotings
    }
  }, _vm._l(_vm.components, function (icon) {
    return _c('button', {
      key: icon.index,
      staticClass: "vote vote--up",
      class: [{
        'animation': _vm.vote === icon.index
      }, "vote--" + icon.index],
      attrs: {
        "disabled": _vm.isVoted,
        "aria-label": "Bewerte mit " + icon.title
      },
      on: {
        "click": function ($event) {
          return _vm.saveVote(icon.index);
        }
      }
    }, [_c(icon.component, {
      tag: "component",
      staticClass: "rating__icon"
    }), _vm._v(" "), _c('animation-satellite', {
      attrs: {
        "animation": _vm.vote === icon.index
      }
    })], 1);
  }), 0) : _vm._e()]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-49ecdc8f_0", {
    source: ".rating[data-v-49ecdc8f]{display:grid;grid-gap:1em;align-items:center;font-size:var(--voting-font-size)}@media (min-width:600px){.rating[data-v-49ecdc8f]{grid-template-columns:auto 1fr}}.rating--block[data-v-49ecdc8f]{grid-template-columns:1fr;grid-row-gap:0}.rating__buttons[data-v-49ecdc8f]{display:grid;grid-template-columns:repeat(var(--voting-icon-count),3.625rem);grid-gap:1em}.vote[data-v-49ecdc8f]{border:none;font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-webkit-appearance:button;position:relative;background:0 0;display:inline-block;outline:0}.vote.animation[data-v-49ecdc8f]{animation:icon-animation-data-v-49ecdc8f cubic-bezier(.165,.84,.44,1) 1.2s}.vote.animation[data-v-49ecdc8f],.vote[data-v-49ecdc8f]:focus{--vote-color:var(--color-green, #00BAA7)}.vote--1.animation[data-v-49ecdc8f],.vote--1[data-v-49ecdc8f]:focus{--vote-color:var(--color-cherry, #C33546)}.vote--2.animation[data-v-49ecdc8f],.vote--2[data-v-49ecdc8f]:focus,.vote--3.animation[data-v-49ecdc8f],.vote--3[data-v-49ecdc8f]:focus{--vote-color:var(--color-curry, #F5A323)}@keyframes icon-animation-data-v-49ecdc8f{0%{transform:scale(0)}100%{transform:scale(1)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-49ecdc8f";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var IconClose = {
        functional: true,
        render: 
      function render(_h, _vm) {
        var _c=_vm._c;return _c('svg',{class:[_vm.data.class, _vm.data.staticClass],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 48 48"}},[_c('path',{attrs:{"d":"M43.644.785L24 20.43 4.356.785a2.525 2.525 0 10-3.57 3.571L20.428 24 .785 43.644a2.525 2.525 0 003.571 3.57L24 27.572l19.644 19.644a2.525 2.525 0 103.57-3.571L27.572 24 47.215 4.356a2.525 2.525 0 00-3.571-3.57z","fill":"#FFF","fill-rule":"evenodd"}})])
      }
    
      };

//
var script$2 = {
  name: 'AppOverlay',
  components: {
    IconClose
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
      default: () => ({})
    }
  },

  data() {
    return {
      showOverlay: this.isVisible,
      defaultStyles: {
        '--overlay-color-text': '#fff',
        '--overlay-color-background': '#1a1a1a',
        '--overlay-headline-size': '4rem',
        '--overlay-close-size': '50px',
        '--overlay-border-radius': '1em',
        '--overlay-padding': '1em'
      }
    };
  },

  computed: {
    cssVars() {
      return { ...this.defaultStyles,
        ...this.additionalStyles
      };
    }

  },
  methods: {
    close() {
      this.showOverlay = false;
      this.$emit('close');
    }

  },
  watch: {
    showOverlay(isOpen) {
      if (isOpen) {
        document.body.classList.add('overlay-open');
      } else {
        document.body.classList.remove('overlay-open');
      }
    },

    isVisible(isOpen) {
      this.showOverlay = isOpen;
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
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

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-36eb1c2e_0", {
    source: ".overlay-open{overflow:hidden}",
    map: undefined,
    media: undefined
  }), inject("data-v-36eb1c2e_1", {
    source: ".modal-fade-enter[data-v-36eb1c2e],.modal-fade-leave-active[data-v-36eb1c2e]{opacity:0}.modal-fade-enter-active[data-v-36eb1c2e],.modal-fade-leave-active[data-v-36eb1c2e]{transition:opacity .5s ease}.overlay[data-v-36eb1c2e]{display:flex;justify-content:center;align-items:center;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.9);z-index:100}.overlay__inner[data-v-36eb1c2e]{width:90vw;max-width:1930px;display:grid;grid:\". close\" auto \"headline headline\" auto \"content content\" auto/1fr auto;background:var(--overlay-color-background);border-radius:var(--overlay-border-radius);padding:var(--overlay-padding)}.overlay__content[data-v-36eb1c2e]{grid-area:content}.overlay__headline[data-v-36eb1c2e]{grid-area:headline;font-size:var(--overlay-headline-size);font-weight:700}.overlay__close[data-v-36eb1c2e]{grid-area:close;background:0 0;border:0;appearance:none;color:var(--overlay-color-text);align-self:start;margin-bottom:2em}.overlay__close-icon[data-v-36eb1c2e]{width:var(--overlay-close-size)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-36eb1c2e";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AnimationSatellite: __vue_component__,
  AppRating: __vue_component__$1,
  AppOverlay: __vue_component__$2
});

// Import vue components

const install = function installTouchpointComponentsVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()

export default plugin;
export { __vue_component__ as AnimationSatellite, __vue_component__$2 as AppOverlay, __vue_component__$1 as AppRating };
