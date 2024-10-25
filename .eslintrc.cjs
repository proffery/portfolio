module.exports = {
  extends: [
    "@it-incubator/eslint-config",
    "plugin:@next/next/recommended",
    "plugin:@react-three/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  ignorePatterns: [
      "/src/assets/images/"
  ],
  rules: {
    "import/no-unresolved": "off",
    'max-lines': 1,
    "react/no-unknown-property": "off",
  },
}
