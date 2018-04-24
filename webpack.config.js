const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, options) {

  const isProduction = options.mode === "production";
  const appTitle = env && env.title ? env.title : "React Music Application";

  console.log("Production: " + isProduction);
  console.log("App title: " + appTitle);

  const config = {

    context: path.join(__dirname, "src"),

    entry: "./index.js",
    
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    
    optimization: {
      minimize: (isProduction ? true : false)
    },

    resolve: {
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: appTitle,
        hash: true,
        template: path.resolve(__dirname, "./public/index.html")
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      hot: true,
    }
  }

  return config;

};
