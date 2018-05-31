
module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,

    alias: {
<<<<<<< HEAD

    },
    extensions: ['.js', '.jsx', '', 'stage-0']
  },

=======
      // Greeter: 'public/components/Greeter.jsx', EXAMPLE

    },
    extensions: ['stage-0', '.js', '.jsx', '']
  },

  // We use bable-loader(a div dependancy - we remove div so we need a loader to convert jsx code to a language our browser can read/convert all our jsx files into ES5 code that we can use today).
  // Initiate & set the props for our bable-loader: We specify: loader name; query: sets an obj array with an inbuild method - 'presets' that tell the bable loader what to do; finally we have test property.
>>>>>>> 26a5f1ae52a506ad22f587a3ea7fac4403fa800e
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {

          presets: ['react', 'es2015']
        },

        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
