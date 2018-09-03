module.exports = {
  entry: __dirname + "/src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  mode: "development",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' as resolvable extension.
    extensions: [".ts", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader?tsconfig=" + __dirname + "/tsconfig.json" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
