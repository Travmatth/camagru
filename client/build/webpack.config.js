module.exports = {
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
	}
}
