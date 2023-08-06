module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    "plugin:prettier/recommended",
    "prettier",
    // "prettier-plugin-astro",
  ],
  plugins: ["simple-import-sort"],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.astro"],
      rules: {
        // "astro/no-set-html-directive": "error"
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Side effect imports.
              ["^\\u0000"],
              // Internal components, packages.
              // eslint-disable-next-line no-useless-escape
              ["^(@/components)(/.*|$)"],
              ["^(@)(/.*|$)"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
    // ...
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        // parser: "flow",
        printWidth: 120,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
      },
    ],
  },
};
