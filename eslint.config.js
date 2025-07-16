const path = require('path');
const tseslint = require('typescript-eslint');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

const resolve = (dir) => path.resolve(process.cwd(), dir);

module.exports = [
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      '**/*.stories.*',
      '**/*.test.*',
      '**/__tests__/**',
      'node_modules/',
      'dist/',
      'build/',
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    settings: {
      'import/resolver': {
        webpack: {
          config: resolve('packages/bootstrap/webpack/webpack.base.conf.js'),
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'prettier/prettier': 'warn',
    },
  },
  prettierConfig,
];
