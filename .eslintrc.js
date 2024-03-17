module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-extraneous-class': 0,
    'space-before-function-paren': ['error', 'always'],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  }
}
