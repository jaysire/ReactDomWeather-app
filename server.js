const express = require('express');

// Create our app
const app = express();

const Port = process.env.PORT || 8000;

app.use(function (request, response, next) {
  if (req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    response.redirect('http://' + request.hostname + request.url);
  }
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port', Port);
});
