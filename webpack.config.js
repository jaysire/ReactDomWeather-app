
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
<<<<<<< HEAD
    alias: {
=======

    alias: {

>>>>>>> c7d7977dcdd73df0dda7c194629ee710c6866c32
    },
    extensions: ['.js', '.jsx', '', 'stage-0']
  },
<<<<<<< HEAD
=======

>>>>>>> c7d7977dcdd73df0dda7c194629ee710c6866c32
  module: {
    loaders: [
      {
        loader: 'babel-loader',

        query: {

          presets: ['react', 'es2015']
        },

        test: /\.jsx?$/,
<<<<<<< HEAD

=======
>>>>>>> c7d7977dcdd73df0dda7c194629ee710c6866c32
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
