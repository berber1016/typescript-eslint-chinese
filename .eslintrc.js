module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "some-other-config-you-use", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
