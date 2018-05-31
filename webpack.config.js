// Helps you export an object that helps you config what webpack does.
// specify props to export:
// 1) The Entry- this tells webpack where it should start processing our code.
// 2) The Output: We set an object that takes two props, path to file, and in node.js we can use dirname to get to the file. and file name.
// Resolve: takes a list of file extensions that we can process and we specify them here (.js; .jsx, empty string meeans find files with no extension).
module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '']
  },
  // We use bable-loader(a div dependancy - we remove div so we need a loader to convert jsx code to a language our browser can read/convert all our jsx files into ES5 code that we can use today).
  // Initiate & set the props for our bable-loader: We specify: loader name; query: sets an obj array with an inbuild method - 'presets'; finally we have test property.
  module: {
    loaders: [
      {
        // telling bable-loader to take our files and run them thru react & es2015 & get the output.
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        // test attribut to specify what files to look for that match the .jsx attribute.
        test: /\.jsx?$/,
        // We specify what files to exclude using this code.
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
// This mimicks us running the file/code through the iterm/command line terminal. It only works well when testing short lines of code; but when building an app of to run files of code, we set this up instead.
