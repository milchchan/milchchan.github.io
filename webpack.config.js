const path = require('path');

if (process.env.NODE_ENV == "production") {
  entry = {
    index: "./src/main.js"
  }
} else {
  entry = {
    index: "./src/main.js"
  }
}

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: '/js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 8080
  },
};