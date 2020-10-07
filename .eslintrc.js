module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/require-explicit-emits': 0,
    'vue/custom-event-name-casing': 0,
    'vue/html-indent': 0,
    'vue/no-deprecated-v-on-native-modifier': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
    'no-redeclare': 0,
    'no-empty': 0,
    'vue/this-in-template': 0,
    'no-mixed-spaces-and-tabs': 0
  }
}
