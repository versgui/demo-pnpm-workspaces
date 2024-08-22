// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  // Configures for antfu's config
  {
    react: true,
    typescript: true,
  },
  {
    files: ['apps/api/**/*.ts', 'apps/api/**/*.json'],
    rules: {
      'ts/consistent-type-imports': 'off',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
  {
    files: ['apps/backoffice/**/*.ts', 'apps/backoffice/**/*.json'],
  },
)
