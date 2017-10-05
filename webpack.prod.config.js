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

module.exports = {
	target: "web", // <=== can be omitted as default is 'web'
	context: `${__dirname}/source/tech/`,
	entry: [`${__dirname}/source/tech/js/index.js`],
	output: {
		path: `${__dirname}/public/tech/`,
		publicPath: "/public/tech/",
		filename: "tech.min.js"
	},
	module: {
		rules: [loaders.sass, loaders.media, loaders.js, loaders.json]
	},
	plugins: [
		new CleanWebpackPlugin([`${__dirname}/public/`, `${__dirname}/build/`]),
		new ExtractTextPlugin({
			filename: "./style/tech.min.css",
			disable: false,
			allChunks: true
		}),
		new CopyWebpackPlugin([
			{
				from: `${__dirname}/source/tech/style/img/`,
				to: `${__dirname}/public/tech/style/img/`
			},
			{
				from: `${__dirname}/source/md/`,
				to: `${__dirname}/build/tech/md/`
			},
			{
				from: `${__dirname}/source/tech/index.html`,
				to: `${__dirname}/public/tech/index.html`
			}
		]),
		new MinifyPlugin()
	]
};
