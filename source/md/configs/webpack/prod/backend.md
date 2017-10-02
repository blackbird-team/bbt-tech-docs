# Backend
## Файл конфигурации webpack.prod.config.js

```javascript
/*	eslint import/no-extraneous-dependencies:0	*/
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const fs = require("fs");

const nodeModules = {};
fs
	.readdirSync("node_modules")
	.filter(x => [".bin"].indexOf(x) === -1)
	.forEach(mod => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

module.exports = {
	context: `${__dirname}/source/`,
	target: "node",
	devtool: "source-map",
	externals: nodeModules,
	entry: [`${__dirname}/source/js/index.js`],
	output: {
		path: `${__dirname}/build/`,
		filename: "bundle.min.js"
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				use: ["babel-loader"]
			},
			{
				test: /\.json$/,
				use: "json-loader"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([`${__dirname}/build/`]),
		new MinifyPlugin(),
        new CopyWebpackPlugin([
        	{ 
        		from: `${__dirname}/source/md/`, 
        		to: `${__dirname}/build/md/` 
        	}
        ]),
	]
};
```