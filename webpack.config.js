module.exports = {
  mode: 'production',
  devServer: {
    contentBase: './dist',
    useLocalIp: true,
    host: '0.0.0.0',
  },
  entry: ['./src/index.js', './src/index.css'],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: 2,
                },
              ],
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 1 version', 'ie >= 11'],
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
}
