module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["prettier"],
  overrides: [],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "warn",
  },
};
