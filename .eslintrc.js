module.exports = {
	parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
	extends: [
	  'eslint:recommended',
	  'plugin:react/recommended',
	  'plugin:@typescript-eslint/eslint-recommended'
	],
	plugins: [
		  '@typescript-eslint',
		  'react'
	],
	parserOptions: {
	  ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
	  sourceType: 'module',  // Allows for the use of imports
	  ecmaFeatures: {
		jsx: true,  // Allows for the parsing of JSX
	  },
	},
	rules: {
	  // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
	  // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
	  'brace-style': [ 'error', 'allman', { 'allowSingleLine': true } ],
	  '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { parameterProperties: 'off' } }],
	  '@typescript-eslint/no-parameter-properties': 'error',
	  '@typescript-eslint/interface-name-prefix': ['error', { 'prefixWithI': 'always' }],
	  'indent': [ 'error', 'tab' ],
	  'no-mixed-spaces-and-tabs': 'error',
	  'no-trailing-spaces': 'off',
	  'no-unused-vars': 'off',
	  'react/prop-types': 'off',
	  'semi': [ 'error', 'always' ],
	  'quotes': [ 'error', 'single' ],
	  'react/self-closing-comp': [ 'error', { 'component': true, 'html': true } ],
	},
	settings: {
	  react: {
		version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
	  },
	},
  };