const { alias, aliasJest } = require('react-app-rewire-alias');

const aliasMap = {
	'@': 'src/',
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
