import * as path from "path";
import * as webpack from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import HtmlRendererWebpackPlugin from "html-renderer-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

import routes from "./src/routes";
import renderer from "./src/renderer";

const isProduction = process.env.NODE_ENV === "production";

const config: webpack.Configuration = {
  devServer: {
    contentBase: path.join(__dirname, "static"),
    historyApiFallback: {
      disableDotRule: true,
      // Try paths with .html extensions before serving 404
      rewrites: [
        {
          from: /./,
          to: context => context.parsedUrl.pathname + ".html"
        },
        { from: /./, to: "/404" }
      ]
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
            envName: isProduction ? "production" : "development"
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
        commons: {
          chunks: "initial",
          maxInitialRequests: 5,
          minSize: 0,
          minChunks: 2
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  }
};

if (isProduction) {
  config.optimization!.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        mangle: true,
        output: {
          beautify: false,
          comments: false
        }
      }
    })
  ];
} else {
  config.plugins!.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

export default config as webpack.Configuration;
