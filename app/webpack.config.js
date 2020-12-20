const path = require('path');

module.exports = {
	entry: {
		home: './static/js/src/pages/home.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'static/js/dist'),
	},
};
