module.exports = api => {
  const env = api.env();
  const isProduction = env.endsWith("production");

  const presetEnv = {
    loose: true,
    shippedProposals: true,
    useBuiltIns: "entry"
  };

  const presets = [["@babel/preset-env", presetEnv], "@babel/preset-react"];

  const plugins = [
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-syntax-dynamic-import"],
    ["babel-plugin-transform-export-default-name"],
    [
      "babel-plugin-emotion",
      {
        autoLabel: !isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  if (env.startsWith("webpack")) {
    presetEnv.modules = false;
    plugins.push("babel-plugin-universal-import");
  }

  if (env.startsWith("node")) {
    presetEnv.modules = "commonjs";
    presetEnv.targets = {
      node: "current"
    };
    plugins.push(["babel-plugin-universal-import", { babelServer: true }]);
  }

  if (isProduction) {
    presets.push([
      "babel-preset-minify",
      {
        builtIns: false
      }
    ]);
  }

  return { presets, plugins };
};
