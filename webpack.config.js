const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');

module.exports = function () {
  return {
    mode: 'production',
    entry: {
      [name]: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, './dist'),
      libarry: `${name}`,
      libraryTarget: 'umd',
    },
    module: {
      rules:[]
    },
    plugins: [],
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
};
