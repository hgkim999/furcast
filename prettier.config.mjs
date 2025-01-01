export default {
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-packagejson'],

  // Sort class names in `clsx` function calls -- https://github.com/tailwindlabs/prettier-plugin-tailwindcss
  tailwindFunctions: ['clsx'],
};
