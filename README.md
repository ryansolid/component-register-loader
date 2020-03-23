# Solid Components Loader

This loader is intended to wrap your Component Register custom elements for HMR automatically.

## Installation

```bash
# NPM
$ npm install --save-dev component-register-loader

# Yarn
$ yarn add --dev component-register-loader
```

## Usage

You need to add this library to your webpack config. Note that you should carefuly set webpack's [rule condition](https://webpack.js.org/configuration/module/#rule-conditions) so that `component-register-loader` is only used for actual component files.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['component-register-loader'],
        // If and only if all your components are in `path/to/components` directory
        include: path.resolve(__dirname, 'path/to/components')
      }
    ]
  }
}
```

And you have to export each component as default export.

```js
export default register('my-component')(MyComponent);
```
