const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    hot: true,
    open: false,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        // isso é para que possamos compilar qualquer React,
        // ES6 e acima na sintaxe ES5 normal
        // todo o arquivo .js ira passar pelo babel loader
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        // não queremos que nada de node_modules seja compilado
        exclude: '/node_modules/',
        options: {
          // Cachear arquivos já transpilados:
          // ative a opção cacheDirectory nas opções do babel-loader,
          // assim sempre que rodar o build ele só vai analisar os
          // arquivos que foram modificados desde a última execução:
          cacheDirectory: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        // O primeiro, css-loader, lê o conteúdo do CSS
        // guarda em uma variável dentro do JS (como string).
        // Isso é o suficiente para o webpack aceitar
        // um import de CSS, mas ainda não vai adicionar os
        // estilos na página.

        // usamos um segundo loader, style-loader, que pega
        // a saída do primeiro e cria um script que injeta o
        // CSS dinamicamente na página, usando
        // tags &lt;style&gt; no header.
        use: ['style-loader', 'css-loader']
      },
      {
        // Por padrão o file-loader usa como nome do arquivo
        // um hash MD5 do conteúdo do mesmo. Isso é bom, pois
        // se a imagem mudar, esse hash muda, e evita do
        // navegador cachear uma imagem velha, mesmo quando
        // houve alteração na imagem.
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader'
        // options: {
        //   name: '[name].[ext]',
        //   outputPath: 'dist/images'
        // }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(js|jsx)?$/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
};
