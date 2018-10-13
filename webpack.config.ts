import * as path from "path";
import * as webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import HtmlRendererWebpackPlugin from "html-renderer-webpack-plugin";
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import routes from "./src/routes";
import renderer from "./src/renderer";

const isProduction = process.env.NODE_ENV === "production";

const config: webpack.Configuration = {
  devServer: {
    contentBase: path.join(__dirname, "static"),
    historyApiFallback: {
      disableDotRule: true,
      // Try paths with .html extensions before serving 404
      rewrites: [{ from: /./, to: ({ parsedUrl }) => parsedUrl.pathname + '.html' }]
    },
    hot: true,
    overlay: true,
    port: 3000
  },

  mode: isProduction ? "production" : "development",

  devtool: isProduction ? "nosources-source-map" : "eval",

  entry: {
    client: path.resolve("./src/index.tsx")
  },

  output: {
    chunkFilename: isProduction ? "[chunkhash:8].js" : "[name].js",
    filename: isProduction ? "[chunkhash:8].js" : "[name].js",
    path: path.resolve("./public"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            envName: isProduction ? "webpack_production" : "webpack_development"
          }
        }
      }
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      async: !isProduction
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(isProduction ? "production" : "development")
      }
    }),
    new HtmlRendererWebpackPlugin({
      hotPath: /\/src\//,
      paths: Object.keys(routes),
      renderer
    })
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        client: {
          chunks: 'initial',
          minChunks: 2,
          name: 'client'
        },
        vendor: {
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          priority: 10,
          test: /node_modules/
        }
      }
    }
  }
};

if (isProduction) {
  config.plugins.push(new TerserPlugin({ sourceMap: true }), new CopyWebpackPlugin([{ from: 'static', to: '.' }]));
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());
}

export default config as webpack.Configuration;
