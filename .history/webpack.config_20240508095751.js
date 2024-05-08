const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Установите 'development' или 'production' в зависимости от окружения
  entry: './src/index.js', // Точка входа вашего приложения
  output: {
    filename: 'bundle.js', // Имя собранного файла
    path: path.resolve(__dirname, 'dist'), // Путь для сохранения собранного файла
  },
  module: {
    rules: [
      // Настройка загрузчика для JavaScript файлов
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем Babel для транспиляции JavaScript файлов
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Настройка загрузчика для CSS файлов
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Используем MiniCssExtractPlugin и css-loader
      },
    ],
  },
  plugins: [
    // Плагин для генерации HTML файла
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML файла
    }),
    // Плагин для извлечения CSS в отдельный файл
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};