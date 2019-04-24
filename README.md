# Solid Components Loader

This loader is intended to wrap your Solid Components for HMR automatically.

## Installation

```bash
# NPM
$ npm install --save-dev solid-components-loader

# Yarn
$ yarn add --dev solid-components-loader
```

## Usage

You need to add this library to your webpack config. Note that you should carefuly set webpack's [rule condition](https://webpack.js.org/configuration/module/#rule-conditions) so that `solid-components-loader` is only used for actual component files.

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: ['solid-components-loader', {
          loader: 'babel-loader',
          options: { plugins: ['jsx-dom-expressions'] }
        }],
        // If and only if all your components are in `path/to/components` directory
        include: path.resolve(__dirname, 'path/to/components')
      }
    ]
  }
}
```

And you have to export each component as default export.

```js
export default Component('my-component', MyComponent);
```
