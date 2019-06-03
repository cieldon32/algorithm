const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FallbackPost = require('fallback-port');
const port = new FallbackPost(3000);
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

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
		index: './src/index'
	},

	output: {
		filename: 'index.js',
    path: __dirname + "/dist"
  },

  devServer: {
    contentBase: "./dist",
    port: port.getPort()
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

	module: {
		rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: false } }]
      },
			{
				test: /\.s?css$/,
				use: [
					{
            loader: "style-loader"
          }
				]
			}
		]
	},
  
  // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
  // },
	plugins: [
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html"
		}),
		new MiniCssExtractPlugin({
      filename: "index.css"
    })
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
