module.exports = {
	env : {
		node : true,
		es6 : true
	},
	rules   : {
		/** Errors **/
		'camelcase'              : ['error', {properties: 'never'}],
		'func-style'             : ['error', 'expression', {allowArrowFunctions: true}],
		'no-array-constructor'   : 'error',
		'no-iterator'            : 'error',
		'no-nested-ternary'      : 'error',
		'no-new-object'          : 'error',
		'no-proto'               : 'error',

		/** Warnings **/
		'max-lines' : ['warn', {
			max            : 200,
			skipComments   : true,
			skipBlankLines : true,
		}],
		'max-params'           : ['warn', {max: 4}],
		'no-restricted-syntax' : ['warn', 'ClassDeclaration', 'SwitchStatement'],

		/** Fixable **/
		'arrow-parens'    : ['warn', 'always'],
		'brace-style'     : ['warn', '1tbs', {allowSingleLine: true}],
		'linebreak-style' : ['warn', 'unix'],
		'no-var'          : 'warn',
		'prefer-const'    : 'warn',
		'prefer-template' : 'warn',
		'quotes'          : ['warn', 'single'],
		'semi'            : ['warn', 'always'],

		/** Whitespace **/
		'array-bracket-spacing' : ['warn', 'never'],
		'arrow-spacing'         : ['warn', {before: false, after: false}],
		'comma-spacing'         : ['warn', {before: false, after: true}],
		'indent'                : ['warn', 'tab'],
		'keyword-spacing'       : ['warn', {
			before    : true,
			after     : true,
			overrides : {if: {'before': false, 'after': false}}
		}],
		'key-spacing' : ['warn', {
			multiLine  : {beforeColon: true, afterColon: true, align: 'colon'},
			singleLine : {beforeColon: false, afterColon: true}
		}],
		'linebreak-style'               : ['warn', 'unix'],
		'no-trailing-spaces'            : 'warn',
		'no-whitespace-before-property' : 'warn',
		'object-curly-spacing'          : ['warn', 'never'],
		'space-in-parens'               : ['warn', 'never'],
		'template-curly-spacing'        : ['warn', 'never'],
	}
};