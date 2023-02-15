/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: ['@antfu'],
  rules: {
    'complexity': ['error', 5],
    'max-len': ['error', 120],
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'always',
        'groups': [
          'external',
          'builtin',
          [
            'sibling',
            'parent',
          ],
          'index',
          'object',
        ],
        'pathGroups': [
          {
            group: 'external',
            pattern: '~/**',
            position: 'after',
          },
        ],
      },
    ],
  },
}
