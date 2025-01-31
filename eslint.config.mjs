import globals from "globals"; // Import global variables for ESLint
import pluginJs from "@eslint/js"; // Import base ESLint plugin
import pluginReact from "eslint-plugin-react"; // Import React-specific linting rules
import pluginPrettier from "eslint-plugin-prettier"; // Integrate Prettier for code formatting
import pluginReactHooks from "eslint-plugin-react-hooks"; // Linting rules for React Hooks
import pluginSortKeysFix from "eslint-plugin-sort-keys-fix"; // Plugin to fix object key sorting
import pluginSonarJs from "eslint-plugin-sonarjs"; // Import SonarJS for cognitive complexity and code quality
import security from "eslint-plugin-security";
import babelParser from "@babel/eslint-parser"; // Import Babel parser for JSX and modern JavaScript features

export default [
  {
    ignores: [".config/*"],
    files: ["**/*.{js,mjs,cjs,jsx}"], // Specify file types for linting
    languageOptions: {
      parser: babelParser, // Use Babel parser to parse modern JavaScript syntax
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020, // Support ECMAScript 2020 syntax
        sourceType: "module", // Use module syntax
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
      },
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node, // Include Node.js globals
      },
    },
    plugins: {
      prettier: pluginPrettier, // Enable Prettier plugin
      react: pluginReact, // Enable React plugin
      "react-hooks": pluginReactHooks, // Enable React Hooks plugin
      "sort-keys-fix": pluginSortKeysFix, // Enable key sorting plugin
      "sonarjs": pluginSonarJs, // Enable SonarJS plugin for code quality
      "security": security,
    },
    rules: {
      "react/jsx-props-no-spreading": "off", // Allow spreading props in JSX
      "sort-keys-fix/sort-keys-fix": "off", // Disable automatic object key sorting
      "no-console": ["warn", { "allow": ["warn", "error"] }], // Allow console.warn and console.error
      "react-hooks/rules-of-hooks": "error", // Enforce React Hooks rules
      "no-unused-vars": "off", // Disable unused variable checking
      "arrow-parens": ["error", "always"], // Enforce parentheses around arrow function arguments
      "max-len": ["error", { "code": 1000 }], // Set maximum line length to 1000 characters
      "react/prop-types": "off", // Disable prop-types checking for React components
      "jsx-quotes": ["error", "prefer-double"], // Enforce double quotes in JSX attributes
      "object-curly-newline": ["warn"], // Warn on inconsistent object curly brace usage
      "no-duplicate-case": "warn", // Warn about duplicate case labels
      "no-throw-literal": "error", // Disallow throwing literals as exceptions
      "prefer-const": "warn", // Prefer const for variables that are not reassigned
      // "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in hooks
      // "max-lines": ["error", { "max": 250 }], // Limit files to 250 lines
      // "eqeqeq": ["error", "always"], // Enforce strict equality
      // "indent": ["error", 2, { "SwitchCase": 1 }],

      // SonarJS rules
      "sonarjs/no-duplicate-string": "warn", // Warn on duplicate strings
      "sonarjs/no-unused-collection": "error", // Disallow unused collections
      "sonarjs/no-identical-functions": "warn", // Warn on identical functions
      "sonarjs/no-all-duplicated-branches": "error", // Disallow identical branches in conditions
      "sonarjs/no-ignored-return": "warn", // Warn on ignored return values
      "sonarjs/no-empty-collection": "warn", // Disallow empty collections
      "sonarjs/no-nested-template-literals": "warn", // Avoid nested template literals
      
      "no-caller": "error", // Disallow usage of arguments.caller and arguments.callee
      "no-await-in-loop": "error", // Disallow await inside loops
      "no-continue": "error", // Disallow continue statements
      "default-case": "error", // Require default case in switch statements
      "default-case-last": "error", // Ensure default case is last in switch statements
      "no-sparse-arrays": "error", // Disallow sparse arrays
      "no-loop-func": "error", // Disallow function declarations inside loops
      "no-labels": "error", // Disallow labels for statements
      "for-direction": "error", // Ensure correct loop direction
      "no-constant-condition": "error", // Disallow constant conditions in loops
      "no-eval": "error", // Disallow eval()
      "no-new-wrappers": "error", // Disallow creating new instances of primitive wrappers
      "curly": ["error", "all"], // Require curly braces for all control statements
      "no-debugger": "error", // Disallow debugger statements
      "no-var": "error", // Disallow var declarations
      "prefer-arrow-callback": "error", // Prefer arrow functions for callbacks
      "prefer-template": "error", // Enforce usage of template literals
      "consistent-return": "error", // Enforce consistent return statements
      "array-callback-return": "error", // Require return statements in array callbacks
      // "sonarjs/cognitive-complexity": ["warn", 10], // Warn on cognitive complexity above 10
      // "sonarjs/elseif-without-else": "warn", // Warn on "else if" without a trailing "else"
      // "sonarjs/prefer-object-literal": "warn", // Prefer object literals over complex constructions
      // "no-empty": ["error", { "allowEmptyCatch": false }], // Disallow empty blocks
      // "no-prototype-builtins": "error", // Disallow directly calling Object.prototype methods
      // "no-useless-escape": "error", // Disallow unnecessary escape characters
      // "security/detect-object-injection": "warn", // Warns against using user-controlled input as object keys to prevent injection vulnerabilities.


      // "no-restricted-syntax": [
      //   "warn",
      //   {
      //     selector: "Identifier[name=/^(class|enum|export|extends|implements|import|interface|let|package|private|protected|public|static|yield)$/]",
      //     message: "Avoid using future reserved words as identifiers.",
      //   }
      // ],
      
      // "no-collection-impurity": "warn", // Disallow mutations to collections
      // "prefer-ternary": "warn", // Prefer ternary operator where appropriate
      // "no-async-methods": "warn", // Disallow async methods in certain cases
      // "no-shadowed-variable": "warn", // Disallow shadowed variables
      // "prefer-switch": "warn", // Prefer switch statements over multiple if-else
      // "prefer-set-has": "warn", // Use Set has() method instead of indexOf for checks
      // "no-inverted-logic": "warn", // Inverted logic should be avoided
      // "no-unnecessary-else": "warn", // Disallow unnecessary 'else' blocks
      // "no-unnecessary-type-assertion": "warn", // Avoid unnecessary type assertions
    },
    settings: {
      "import/resolver": {
        "babel-module": {}, // Use Babel module resolver
      },
      "react": {
        "version": "detect", // Automatically detect React version
      },
    },
  },
];

