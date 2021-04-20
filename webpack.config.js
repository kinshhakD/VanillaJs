const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push("eslint-loader");
  }

  return loaders;
};


const plugins = () => {
  const base =  [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "assets/favicon.png"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ]

    if (isProd){
      base.push( new BundleAnalyzerPlugin())
    }

  return base
}



module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.js"],
    app: "./app.js",
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  optimization: optimization(),
  resolve: {
    extensions: [".js", ".json", ".png", ".css", ".svg", ".jpg", ".scss"],
    alias: {
      "@models": path.resolve(__dirname, "./src/models"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    port: 8008,
    hot: isDev,
  },
  devtool: isDev ? "source-map" : "",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
    ],
  },
};
