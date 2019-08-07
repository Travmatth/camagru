'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const build = (...dirs) => path.resolve(process.cwd(), ...dirs)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		index: [
			build('src', 'landing'),
			build('src', 'landing-styles')
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.ejs$/,
				exclude: /node_modules/,
				use: 'ejs-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.(ico|jpe?g|png|gif)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
				loader: "file?name=[path][name].[ext]"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: build('assets', 'index.ejs'),
			title: 'index',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css"
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
