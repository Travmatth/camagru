'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const build = (...dirs) => path.resolve(process.cwd(), ...dirs)

module.exports = {
	entry: {
		main: './src/landing.js'
	},
	module: {
		// Define modifications to occur when module is created
		rules: [
			// Convert es2016 syntax -> es2015 syntax
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: build('assets', 'index.html'),
			title: 'index',
			filename: 'index.html'
		})
	]
}
