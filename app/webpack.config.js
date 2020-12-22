const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		home: './static/js/pages/home.js',
	},
	output: {
		filename: '[name]/index.js',
		path: path.resolve(__dirname, 'static/dist'),
	},
	resolve: {
		alias: {
			scss: path.resolve(__dirname, 'static/css/scss'),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage',
									corejs: {
										version: 3,
									},
								},
							],
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name]/style.css',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: '**/*',
					to: 'fonts',
					context: 'static/css/fonts',
				},
				{
					from: '**/*',
					to: '[name]/index.[ext]',
					context: 'static/html',
				},
			],
		}),
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			minChunks: 2,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
				commons: {
					test: /[\\/]js[\\/]/,
					name: 'commons',
					chunks: 'all',
				},
			},
		},
	},
};
