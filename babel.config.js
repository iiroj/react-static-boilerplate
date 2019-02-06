module.exports = api => {
  const env = api.env();
  const isProduction = env.endsWith("production");

  const presetEnv = {
    loose: true,
    shippedProposals: true,
    useBuiltIns: "entry"
  };

  const presets = [
    ["@babel/preset-env", presetEnv],
    ["@babel/preset-react"],
    [
      "@emotion/babel-preset-css-prop",
      {
        autoLabel: !isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  const plugins = [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-class-properties",
    "@loadable/babel-plugin",
    "babel-plugin-transform-export-default-name"
  ];

  if (env.startsWith("webpack")) {
    presetEnv.modules = false;
  }

  if (env.startsWith("node")) {
    presetEnv.modules = "commonjs";
    presetEnv.targets = {
      node: "current"
    };
    plugins.push(
      "@babel/plugin-syntax-dynamic-import",
      "babel-plugin-dynamic-import-node"
    );
  }

  return { presets, plugins };
};
