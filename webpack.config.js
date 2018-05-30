// Helps you export an object that helps you config what webpack does.
// specify props to export:
// 1) The Entry- this tells webpack where it should start processing our code.
// 2) The Output: We set an object that takes two props, path to file, and in node.js we can use dirname to get to the file. and file name.
// Resolve: takes a list of file extensions that we can process and we specify using their  (.js; .jsx, empty string meeans find files with no extension).

module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname,
    filename: './public.bundle.js'
  },
  extensions: ['', '.js', '.jsx']
}

// This mimicks us running the file/code through the iterm/command line terminal. It only works well when testing short lines of code; but when building an app of to run files of code, we set this up instead.













