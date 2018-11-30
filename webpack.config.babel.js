import path from "path";
import webpack from "webpack";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import HtmlRendererWebpackPlugin from "html-renderer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import StatsPlugin from "stats-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

import routes from "./src/routes";
import renderer from "./src/renderer";

const isProduction = process.env.NODE_ENV === "production";

const config = {
  devServer: {
    contentBase: path.join(__dirname, "static"),
    historyApiFallback: {
      disableDotRule: true,
      index: "/404.html",
      // Try paths with .html extensions before serving 404
      rewrites: [
        { from: /./, to: ({ parsedUrl }) => parsedUrl.pathname + ".html" }
      ]
    },
    hot: true,
    overlay: true,
    port: 3000,
    quiet: true
  },

  mode: isProduction ? "production" : "development",

  devtool: isProduction ? "nosources-source-map" : "eval",

  entry: {
    client: path.resolve("./src/index.js")
  },

  output: {
    chunkFilename: isProduction ? "[chunkhash:8].js" : "[name].js",
    filename: isProduction ? "[chunkhash:8].js" : "[name].js",
    path: path.resolve("./public"),
    publicPath: "/"
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
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        client: {
          chunks: "initial",
          minChunks: 2,
          name: "client"
        },
        vendor: {
          chunks: "initial",
          enforce: true,
          name: "vendor",
          priority: 10,
          test: /node_modules/
        }
      }
    }
  }
};

if (isProduction) {
  config.plugins.push(
    new CopyWebpackPlugin([{ from: "static", to: "." }]),
    new StatsPlugin("stats.json", { chunkModules: true, defaultSizes: "gzip" })
  );
} else {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin()
  );
}

export default config;
