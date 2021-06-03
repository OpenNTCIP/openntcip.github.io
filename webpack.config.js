const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const WriteFilePlugin = require("write-file-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.ts",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./docs",
    historyApiFallback: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "OpenNTCIP",
      myPageHeader: "OpenNTCIP",
      template: "./src/index.html",
      filename: "index.html",
      favicon: "src/images/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new WriteFilePlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
}
