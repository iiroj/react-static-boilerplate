import * as express from 'express';
import * as webpack from 'webpack';

import webpackConfig from './webpack.config';

const PORT = 3000;

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output!.publicPath,
    serverSideRender: true
  })
);

app.use(require('webpack-hot-middleware')(compiler));

// Invalidate renderer's module cache after Webpack Compilation
compiler.hooks.compilation.tap('done', () => {
  Object.keys(require.cache).forEach(id => {
    if (/[\/\\]src[\/\\]/.test(id)) delete require.cache[id];
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
