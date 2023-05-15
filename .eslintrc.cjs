// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn'
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error'
      }
    }
  ]
}
