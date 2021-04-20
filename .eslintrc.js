module.exports = {
  extends: ['plugin:prettier/recommended', '@ininit/eslint-config-react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-use-before-define': 0,
    'react/no-unescaped-entities': 0,
    indent: 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
}
