# Fullstack
## Файл конфигурации webpack.prod.config.js

```javascript
/*	eslint import/no-extraneous-dependencies:0	*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const loaders = {
	js: {
		test: /\.jsx?/,
		exclude: /\/node_modules\//,
		use: "babel-loader"
	},
	json: {
		test: /\.json$/,
		use: "json-loader"
	},
	sass: {
		test: /\.sass$/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"]
		})
	},
	media: {
		test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg|otf)$/,
		exclude: /\/node_modules\//,
		use: {
			loader: "file-loader",
			options: {
				name: "[path][name].[ext]"
			}
		}
	}
};

const serverConfig = {
	target: "node",
	context: `${__dirname}/source/server/`,
	entry: [`${__dirname}/source/server/index.js`],
	output: {
		path: `${__dirname}/build/`,
		filename: "main.min.js"
	},
	module: {
		rules: [loaders.js, loaders.json]
	},
	plugins: [
		new CleanWebpackPlugin([`${__dirname}/build/`]),
		new CopyWebpackPlugin([
			{
				from: `${__dirname}/source/md/`,
				to: `${__dirname}/build/md/`
			}
		]),
		new MinifyPlugin()
	]
};

const frontendConfig = {
	target: "web", // <=== can be omitted as default is 'web'
	context: `${__dirname}/source/client/`,
	entry: [`${__dirname}/source/client/js/index.js`],
	output: {
		path: `${__dirname}/public/`,
		publicPath: "/public/",
		filename: "main.min.js"
	},
	module: {
		rules: [loaders.sass, loaders.media, loaders.js, loaders.json]
	},
	plugins: [
		new CleanWebpackPlugin([`${__dirname}/public/`]),
		new ExtractTextPlugin({
			filename: "./style/style.min.css",
			disable: false,
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{
				from: `${__dirname}/source/client/style/img/`,
				to: `${__dirname}/public/style/img/`
			}
		]),
		new MinifyPlugin()
	]
};

module.exports = [serverConfig, frontendConfig];

```