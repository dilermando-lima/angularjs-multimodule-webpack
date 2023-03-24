const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
const path = require("path");

module.exports = (env) => {
  return {
    context: path.resolve(__dirname, "src","app"),
    entry: "../main.js",
    output: {
      path: path.resolve(__dirname,"dist"),
      filename: "bundle.js",
      clean: true
    },
    devServer: {
      static: "./dist",
      port: env.PORT
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./app.html", filename: "./index.html" }),
      new Webpack.DefinePlugin(
        {
          process: {
            env: {
              LOG_LEVEL: JSON.stringify(env.LOG_LEVEL)
            }
          }
        }
      )
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
          }
        },
        { test: /\.html$/, use: ["html-loader"] },
        { test: /\.css$/i, exclude: /node_modules/, use: ["style-loader", "css-loader"] }
      ]
    }
  }

};
