var webpack = require('webpack');
var path = require('path');

module.exports = {

	mode: 'development',

	entry: [
		'./src/index.js',
	],

	output: {
		path: path.join(__dirname, './public/js/'),
		filename: 'bundle.js',

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
};
