const path = require("path");

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const libConfig = {
  ...commonConfig,
  entry: "./src/index.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};

const demoConfig = {
  ...commonConfig,
  entry: "./demo/demo.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "demo"),
    filename: "demo.js",
  },
};

module.exports = [
  // libConfig,
  demoConfig,
];
