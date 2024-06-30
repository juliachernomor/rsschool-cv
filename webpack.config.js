const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './source/js/index.js',
    module: {
        rules: [
          { test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
            test: /\.html$/,
            use: {
              loader: "html-loader",
            }
          },
        ]
      },
    output: {
        // Метод path.resolve() преобразует последовательность путей или сегментов путей в абсолютный путь
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'source/index.html', // Путь к вашему основному шаблону HTML
          filename: 'index.html', // Название выходного файла (может быть любым)
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      open: true,
    },
    mode: 'development',
}