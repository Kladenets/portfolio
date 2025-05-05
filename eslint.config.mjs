import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      simpleImportSort,
    },
    rules: {
      'simpleImportSort/imports': 'warn',
      'simpleImportSort/exports': 'warn',
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/build/**',
      '**/dist/**',
      '**/out/**',
      '**/public/**',
      '*.log',
      '.env*',
      '!.env.example',
      '.eslintcache',
      '.turbo',
    ],
  },
];

export default eslintConfig;
