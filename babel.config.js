const presets = [
  [
    "@babel/preset-typescript"
  ],
  [
    "@babel/preset-env",
    {
      corejs: 3,
      useBuiltIns: "usage"
    }
  ]
];

const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      regenerator: true
    }
  ]
];

module.exports = { presets, plugins };
