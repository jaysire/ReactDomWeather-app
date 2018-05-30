var express = require('express') // nodes key word require.

// create our app
var app = express()

// tell it which folder we want to serve. helps us add functionality to our app
var static = express.static('public')
app.use(static)

const PORT = 3000
app.listen(PORT, function () {
  console.log('Express server is up on port' + ' ' + PORT)
})
