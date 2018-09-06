module.exports = api => {
  const isProduction = api.env() === 'production';

  const presetEnv = {
    loose: true,
    modules: false,
    shippedProposals: true,
    useBuiltIns: 'entry'
  };

  const plugins = [
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-proposal-class-properties'],
    [
      'babel-plugin-emotion',
      {
        autoLabel: !isProduction,
        hoist: isProduction,
        sourceMap: !isProduction
      }
    ]
  ];

  if (api.env() === 'node') {
    presetEnv.modules = 'commonjs';
    presetEnv.targets = {
      node: 'current'
    };
    plugins.push(['babel-plugin-universal-import', { babelServer: true }]);
  } else {
    plugins.push('babel-plugin-universal-import');
  }

  return {
    presets: [['@babel/preset-env', presetEnv], ['@babel/preset-react']],
    plugins
  };
};
