'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const build = (...dirs) => path.resolve(process.cwd(), ...dirs)

module.exports = {
	entry: {
		main: './src/landing.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
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
	],
	devServer: {
		hot: true,
		port: 8080,
		host: '0.0.0.0',
		watchOptions: {
			// enable polling - fsevents are not supported in docker
			poll: true
		}
	  }
}
