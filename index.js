module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "react-hooks",
    "sort-class-members",
    "sort-imports-es6-autofix",
    "jsx-a11y",
    "unused-imports",
  ],
  ignorePatterns: [
    "**/generated/**",
    "**/build/**",
    "**/types/**",
    "**/dist/**",
  ],
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    "one-var": ["error", { initialized: "never" }],
    "no-cond-assign": "error",
    camelcase: [
      "error",
      {
        allow: ["^UNSAFE_"],
        properties: "never",
        ignoreGlobals: true,
      },
    ],
    "new-cap": ["error", { newIsCap: true, capIsNew: false, properties: true }],
    "accessor-pairs": [
      "error",
      { setWithoutGet: true, enforceForClassMembers: true },
    ],
    "constructor-super": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off",
    "import/no-duplicates": ["error", { considerQueryString: true }],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-redeclare": ["error", { builtinGlobals: false }],
    "no-regex-spaces": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": ["error", { props: true }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-with": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/features/*/*"],
      },
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["*package", "!", "/", ",", "="] },
        block: {
          balanced: true,
          markers: ["*package", "!", ",", ":", "::", "flow-include"],
          exceptions: ["*"],
        },
      },
    ],
    "use-isnan": [
      "error",
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": ["error", { requireStringLiterals: true }],
    yoda: ["error", "never"],
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "valid-jsdoc": "off",
    "require-await": "error",
    "block-scoped-var": "error",
    "default-case": "error",
    "dot-notation": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "id-length": [
      "warn",
      { exceptions: ["_", "e", "i", "j", "k", "m", "p", "t", "x", "y", "z"] },
    ],
    "id-match": [
      "error",
      "^_$|^[$_a-zA-Z]*[_a-zA-Z0-9]*[a-zA-Z0-9]*$|^[A-Z][_A-Z0-9]+[A-Z0-9]$",
      { onlyDeclarations: true, properties: true },
    ],
    "sort-imports-es6-autofix/sort-imports-es6": [
      "warn",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "max-depth": "error",
    "max-params": ["error", 3],
    "no-alert": "error",
    "no-bitwise": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-inline-comments": "warn",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-nested-ternary": "error",
    "no-script-url": "error",
    "no-underscore-dangle": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    "no-var": "error",
    "no-void": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", next: "return", prev: "*" },
      { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
    ],
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: { array: false, object: false },
        VariableDeclarator: { array: true, object: true },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-spread": "error",
    "prefer-template": "error",
    radix: "error",
    "require-atomic-updates": "off",
    "sort-keys": ["warn", "asc", { natural: true }],
    "vars-on-top": "error",
    "import/default": "error",
    "import/named": "off",
    "import/no-unresolved": "off",
    "sort-class-members/sort-class-members": [
      "warn",
      {
        order: [
          "[static-properties-alpha]",
          "[static-methods-alpha]",
          "[properties-alpha]",
          "[constructor]",
          "[methods-alpha]",
        ],
        groups: {
          "static-properties-alpha": [
            { type: "property", static: true, sort: "alphabetical" },
          ],
          "static-methods-alpha": [
            { type: "method", static: true, sort: "alphabetical" },
          ],
          "properties-alpha": [
            { type: "property", propertyType: "Literal", sort: "alphabetical" },
          ],
          "methods-alpha": [{ type: "method", sort: "alphabetical" }],
        },
      },
    ],
    "@typescript-eslint/no-namespace": "off",

    // React
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "react/require-default-props": "off",
    "react/display-name": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
      },
    ],
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-sort-props": "warn",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/no-danger": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "error",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
    "react/sort-prop-types": "warn",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
};
