// Modified from vue-hot-loader:
// https://github.com/jshmrtn/vue-hot-loader/blob/master/lib/loader.js
const loaderUtils = require('loader-utils');

function loadHmr(file) {
  return `
    import Component from ${file};
    import { hot } from 'component-register';
    export default Component;

    hot(module, Component.prototype.registeredTag);
  `;
}

module.exports = function load() {};

module.exports.pitch = function pitch(remainingRequest) {
  const file = loaderUtils.stringifyRequest(this, '!!' + remainingRequest);
  const isProduction = this.minimize || process.env.NODE_ENV === 'production';

  if (this.cacheable) {
    this.cacheable();
  }

  if (isProduction) {
    return `export * from ${file};`;
  }

  return loadHmr(file);
};