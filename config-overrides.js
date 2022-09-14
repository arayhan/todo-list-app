const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': './src/components/',
		'@images': './src/images/',
		'@pages': './src/pages/',
		'@services': './src/services/',
		'@styles': './src/styles/',
		'@tests': './src/tests/',
		'@utils': './src/utils/',
	})(config);

	return config;
};
