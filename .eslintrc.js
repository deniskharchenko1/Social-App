module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:prettier/recommended'],
  settings: {
    project: './tsconfig.json',
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-use-before-define': 'off',
    'no-new': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-shadow': ['warn'],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: true,
            classes: true,
            variables: true,
          },
        ],
        'react/display-name': [
          'off',
          {
            ignoreTranspilerName: false,
          },
        ],
        'react/forbid-prop-types': [
          'error',
          {
            forbid: ['any', 'array', 'object'],
            checkContextTypes: true,
            checkChildContextTypes: true,
          },
        ],
        'react/forbid-dom-props': ['off'],
        'react/jsx-handler-names': [
          'off',
          {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
          },
        ],
        'react/jsx-key': 1,
        'react/jsx-no-bind': [
          'error',
          {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false,
          },
        ],
        'react/jsx-no-duplicate-props': [
          'error',
          {
            ignoreCase: true,
          },
        ],
        'react/jsx-no-literals': [
          'off',
          {
            noStrings: true,
          },
        ],
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
          'error',
          {
            allowAllCaps: true,
          },
        ],
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-sort-default-props': [
          'off',
          {
            ignoreCase: true,
          },
        ],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'error',
        'react/no-deprecated': ['error'],
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-will-update-set-state': 'error',
        'react/no-direct-mutation-state': 'off',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': [
          'error',
          {
            ignoreStateless: true,
          },
        ],
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/sort-comp': [
          'error',
          {
            order: [
              'static-methods',
              'instance-themes',
              'lifecycle',
              '/^on.+$/',
              'getters',
              'setters',
              '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
              'instance-methods',
              'everything-else',
              'rendering',
            ],
            groups: {
              lifecycle: [
                'displayName',
                'propTypes',
                'contextTypes',
                'childContextTypes',
                'mixins',
                'statics',
                'defaultProps',
                'constructor',
                'getDefaultProps',
                'getInitialState',
                'state',
                'getChildContext',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
              ],
              rendering: ['/^render.+$/', 'render'],
            },
          },
        ],
        'react/jsx-no-target-blank': [
          'error',
          {
            enforceDynamicLinks: 'always',
          },
        ],
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/no-render-return-value': 'error',
        'react/require-optimization': ['off'],
        'react/no-find-dom-node': 'error',
        'react/forbid-component-props': ['off'],
        'react/forbid-elements': ['off'],
        'react/no-danger-with-children': 'error',
        'react/no-unused-prop-types': [
          'error',
          {
            skipShapeProps: true,
          },
        ],
        'react/style-prop-object': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-children-prop': 'error',
        'react/no-array-index-key': 'error',
        'react/require-default-props': [
          'error',
          {
            forbidDefaultForRequired: true,
          },
        ],
        'react/forbid-foreign-prop-types': [
          'warn',
          {
            allowInPropTypes: true,
          },
        ],
        'react/void-dom-elements-no-children': 'error',
        'react/default-props-match-prop-types': [
          'error',
          {
            allowRequiredDefaults: false,
          },
        ],
        'react/no-redundant-should-component-update': 'error',
        'react/no-unused-state': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/boolean-prop-naming': [
          'off',
          {
            propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
          },
        ],
        'react/no-typos': 'error',
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'never',
            children: 'never',
          },
        ],
        'react/jsx-one-expression-per-line': 0,
        'react/no-access-state-in-setstate': 'error',
        'react/jsx-child-element-spacing': 'off',
        'react/no-this-in-sfc': 'error',
        'react/jsx-max-depth': 'off',
        'linebreak-style': [1, 'unix'],
        'import/newline-after-import': 'error',
        'import/no-internal-modules': ['off'],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            pathGroups: [
              {
                pattern: '{@*,@*/**}',
                group: 'external',
                position: 'after',
              },
            ],
            groups: [['builtin', 'external', 'internal']],
            pathGroupsExcludedImportTypes: [['builtin', 'external', 'internal']],
          },
        ],
        'import/no-restricted-paths': 'off',
        'import/max-dependencies': [
          'off',
          {
            max: 10,
          },
        ],
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'error',
        'import/unambiguous': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'import/no-anonymous-default-export': [
          'off',
          {
            allowArray: false,
            allowArrowFunction: false,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowLiteral: false,
            allowObject: false,
          },
        ],
        'import/exports-last': 'off',
        'import/group-exports': 'off',
        'import/no-default-export': 'off',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/dynamic-import-chunkname': [
          'off',
          {
            importFunctions: [],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
          },
        ],
      },
    },
  ],
};
