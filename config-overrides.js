const { alias, aliasJest } = require('react-app-rewire-alias');

const aliasMap = {
	'@components': 'src/components',
	'@images': 'src/images',
	'@pages': 'src/pages',
	'@services': 'src/services',
	'@styles': 'src/styles',
	'@tests': 'src/tests',
	'@utils': 'src/utils',
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
