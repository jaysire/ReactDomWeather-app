// Since we removed the 'script tags' from our 'div tags', we need to import React & ReactDOM to our app.jsx file.
var React = require('react')
var ReactDOM = require('react-dom')

ReactDOM.render(
  <h1>Thank God it's hump day!</h1>,
  document.getElementById('app')
)
