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

  if (typeof env !== 'undefined') {
    plugins.push('babel-plugin-universal-import');
  } else {
    presetEnv.modules = 'commonjs';
    presetEnv.targets = {
      node: 'current'
    };
    plugins.push(['babel-plugin-universal-import', { babelServer: true }]);
  }

  return {
    presets: ['@babel/preset-typescript', '@babel/preset-react', ['@babel/preset-env', presetEnv]],
    plugins
  };
};
