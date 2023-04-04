const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const pluginsList = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css", // Формат имени файла
  }),
  new webpack.DefinePlugin({
    process: { env: {} },
  }),
];

if (process.env.SERVE) {
  pluginsList.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: pluginsList,
};
