module.exports = api => {
  const env = api.env();
  const isProduction = env === 'production';

  const presetEnv = {
    loose: true,
    modules: false,
    shippedProposals: true,
    useBuiltIns: 'entry'
  };

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-emotion',
      {
        autoLabel: !isProduction,
        hoist: isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  if (env === 'node') {
    presetEnv.modules = 'commonjs';
    presetEnv.targets = {
      node: 'current'
    };
    plugins.push(['babel-plugin-universal-import', { babelServer: true }]);
  } else {
    plugins.push('babel-plugin-universal-import');
  }

  return {
    presets: ['@babel/preset-typescript', '@babel/preset-react', ['@babel/preset-env', presetEnv]],
    plugins
  };
};
