module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    ['@babel/preset-flow', { all: true }],
  ],
  env: {
    production: {
      plugins: ['babel-plugin-jsx-remove-data-test-id'],
    },
  },
};
