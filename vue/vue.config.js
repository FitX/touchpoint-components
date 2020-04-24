const path = require('path');
const PACKAGE_JSON = require('./package.json');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('projectRoot', path.resolve(__dirname, './'));
    config.plugin('define')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0]['process.env'].VERSION = JSON.stringify(PACKAGE_JSON.version);
        return args;
      });

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    /* config.module
      .rule('raw')
      .test(/\.scss$/)
      // .test(/\colors.scss$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end(); */
  },
};
