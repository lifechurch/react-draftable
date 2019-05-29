module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@babel/preset-flow", { "all":  true}]
  ],
  env: {
    production: {
      plugins: [
        ["react-remove-properties", { "properties": ["data-testid" ]}]
      ]
    }
  }
};
