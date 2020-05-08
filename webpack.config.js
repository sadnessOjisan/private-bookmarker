const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [new Dotenv()],
};
