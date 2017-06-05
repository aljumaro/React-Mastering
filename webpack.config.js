const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');


module.exports = {
	entry: './app/js/index',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	}, 

	resolve: {
		extensions: ['.js', '.jsx', '.less'],
		alias: {
			'appRoot': path.join(__dirname, 'app/js')
		}
	},

	module: {
		rules: [
			{
				test: /\.less$/, 
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/, 
				exclude: /node_modules/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.jsx$/, 
				exclude: /node_modules/,
				include: path.join(__dirname, 'app/js'),
				use: {
					loader: 'babel-loader',
			        options: {
			          presets: ['react', 'es2015']
			        }
			    }
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		/*new HtmlWebpackIncludeAssetsPlugin({
		    assets: ['node_modules/font-awesome/css/font-awesome.min.css','node_modules/bootstrap/dist/css/bootstrap.min.css'],
		    append: true
		}),
		new webpack.optimize.UglifyJsPlugin()*/
	],
	devtool: 'eval'
}