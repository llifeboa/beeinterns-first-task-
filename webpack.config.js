const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: ['html-loader?attrs=false', 
				{
					loader: 'pug-html-loader',
					options: {
						pretty: true
					}
				}],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
				  // Translates CSS into CommonJS
					'css-loader',
				  // Compiles Sass to CSS
					'sass-loader',
				],
			  },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
		  filename: 'index.html',
		  template: 'src/index.pug',
		  inject: false,
		}),
		new MiniCssExtractPlugin()
	 ],
	 devServer: {
		contentBase: ['./src/', './dist/'],
		hot: true,
		inline: true,
		port: 8080
	  }

};