module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint"
    ],
    rules: {
      "no-console": 1,                         // Means warning
      "@typescript-eslint/no-unused-vars": 1,  // Means warning,
      "@typescript-eslint/no-explicit-any": 1, // Means warning
      },
    globals: {},
    ignorePatterns: ["**/*.js", "**/tests", "**/test"],
  };