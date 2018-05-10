const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
	mode: 'development',
	entry : {app:'./src/print.js',bundle:'./src/index.js'},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].main.js',
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
	        	test: /\.(png|svg|jpg|gif)$/,
		         use: [
		           'file-loader'
		         ]
	       },
	       {
		         test: /\.(woff|woff2|eot|ttf|otf)$/,
		         use: [
		           'file-loader'
		         ]
		    }
		]
	},
	 plugins: [
	 	new CleanWebpackPlugin(['dist']),/*清空打包目标目录*/
	    new HtmlWebpackPlugin({
	       title: 'Output Management'
	    }),
		new WebpackManifestPlugin({
			fileName:'my-manifest.json',
			basePath:'./app/'/*项目中文件依赖*/
		})/**/
	],
}
