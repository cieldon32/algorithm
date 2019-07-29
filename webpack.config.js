const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpack = require('copy-webpack-plugin');
const FallbackPort = require('fallback-port');
const path = require('path');
const port = new FallbackPort(3000);
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */


module.exports = {
	module: {
		rules: [
			{
        test: /\.js$/,
        exclude: /\/node_modules\//,
				loader: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				use: [
          MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
  },
  
  plugins: [
    new UglifyjsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["index"],
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpack([
      {
        from: './src/mock/',
        to: './mock',
        toType: 'dir'
      },
      {
        from: './src/data/',
        to: './data',
        toType: 'dir'
      }
    ], {})
	],

	entry: {
		index: './src/pages/index/index.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'docs')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee', '.ts', '.tsx'],
    alias: {
      data: path.join(__dirname, "./src/data"),
      containers: path.join(__dirname, "./src/containers"),
      reducers: path.join(__dirname, "./src/reducers")
    }
  },
  devServer: {
    contentBase: "./dist",
    port: port.getPort(),
    hot: true
  }
};
