module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [],
  "parserOptions": {},
  "env": {
    "node": true,
    "es6": true
  },
  "globals": {},
  "rules": {
    "semi": "error",
    "@typescript-eslint/ban-types": "off"
  }
};
