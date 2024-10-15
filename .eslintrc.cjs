module.exports = {
  extends: [
    "@it-incubator/eslint-config",
    "plugin:@next/next/recommended",
    "plugin:@react-three/recommended",
  ],
  rules: {
    "react/no-unknown-property": "off"
  }
}