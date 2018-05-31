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
    // just like in entry, we have to specify where the resolve should happen. dirname is a variable available to js by default that give you the path to whichever file you are in. In our case it gives us the parth to the 'HelloReact 'main project folder
    root: __dirname,
    // With ALIAS we can pick names for our Compnnts; Tell webpack where to find our Compnnts (path), and do all the work behind the scenes
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: ['.js', '.jsx', '']
  },
  // We use bable-loader(a div dependancy - we remove div so we need a loader to convert jsx code to a language our browser can read/convert all our jsx files into ES5 code that we can use today).
  // Initiate & set the props for our bable-loader: We specify: loader name; query: sets an obj array with an inbuild method - 'presets' that tell the bable loader what to do; finally we have test property.
  module: {
    loaders: [
      {
        // telling bable-loader to take our files and run them thru react & es2015 & get the output.
        loader: 'babel-loader',
        query: {
          // Presets is an inbuilt method that tells babel-loader what to do.- in our case we asked babel-loader to compile our jsx code into react and es2015.
          presets: ['react', 'es2015']
        },
        // test attribut to specify what files to look for that match the .jsx attribute. i.e.Which files to apply the loader to. In our case we want all files ending with the jsx extension.
        test: /\.jsx?$/,
        // We specify what files to exclude using this code.
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
// This mimicks us running the file/code through the iterm/command line terminal. It only works well when testing short lines of code; but when building an app of to run files of code, we set this up instead.
