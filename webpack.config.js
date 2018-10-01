import ExtractTextPlugin from 'extract-text-webpack-plugin'

var webpack = require('webpack');
var path = require('path');

module.exports = {
	plugins: [
        
        new ExtractTextPlugin('style.css')
      ]

	mode: 'development',

	entry: [
		'./src/index.js',
	],

	output: {
		path: path.join(__dirname, './public/js/'),
		filename: './dist/bundle.js',
		publicPath: './public/js/',
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						'react',
						'env',
					],
				},
			},
		}, ]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	loader: ExtractTextPlugin.extract(
		'style-loader',
		combineLoaders([
		 {
		   loader: 'css-loader',
		   query: {
			 modules: true,
			 localIdentName: '[name]__[local]___[hash:base64:5]'
		   }
		 }
	   ])
   )
	
};

    
