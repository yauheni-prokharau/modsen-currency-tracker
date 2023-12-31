const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/store"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.svg",
    }),
    new CleanWebpackPlugin(),
    new DotenvWebpackPlugin({
      path: "./.env.local",
    }),
    new ESLintWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
