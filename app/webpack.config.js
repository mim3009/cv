const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
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
									modules: 'commonjs',
									useBuiltIns: 'usage',
									loose: true,
									corejs: 3,
								},
							],
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(woff|woff2|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts',
					publicPath: '/fonts',
				},
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
					to: '[name]/index.[ext]',
					context: path.resolve(__dirname, 'static/html'),
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
		minimizer: [
			`...`,
			new HtmlMinimizerPlugin({
				parallel: true,
			}),
		],
	},
};
