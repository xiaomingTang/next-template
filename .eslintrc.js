module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".ts",
          ".tsx"
        ]
      },
      alias: {
        map: [
          ['@', './src'],
          ['@ROOT', '.'],
        ],
      },
    }
  },
  rules: {
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'warn',

    // tsc 会检查, 无需 lint
    'no-dupe-class-members': 'off',

    'import/prefer-default-export': 'off',
    "@typescript-eslint/no-unused-vars": ["warn", {
      args: "after-used",
      argsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
    }],
  },
}
