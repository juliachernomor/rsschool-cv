const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './source/js/index.js',
    module: {
        rules: [
          { test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
        ]
      },
    output: {
        // Метод path.resolve() преобразует последовательность путей или сегментов путей в абсолютный путь
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'source/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],

}