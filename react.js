module.exports = {
	extends: require.resolve('./index.js'),
	parserOptions : {
		ecmaVersion  : 6,
		sourceType   : 'module',
		ecmaFeatures : {
			jsx                          : true,
			experimentalObjectRestSpread : true,
		}
	},
	env : {
		browser : true,
		es6     : true,
		node    : true
	},
	plugins : ['react'],
	rules   : {
		/** Errors **/
		'react/jsx-no-bind'      : ['error', { allowArrowFunctions: true }],
		'react/jsx-uses-react'   : 'error',
		'react/prefer-es6-class' : ['error', 'never'],

		/** Warnings **/
		'react/jsx-uses-vars' : 'warn',

		/** Fixable **/
		'jsx-quotes' : ['warn', 'prefer-single'],

		/** Whitespace **/
		'react/jsx-indent-props' : ['warn', 'tab'],
	}
};