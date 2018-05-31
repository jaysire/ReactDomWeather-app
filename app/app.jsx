// Since we removed the 'script tags' from our 'div tags', we need to import React & ReactDOM to our app.jsx file.
var React = require('react')
var ReactDOM = require('react-dom')

var objOne = {
  name: 'Josiah',
  location: 'Salt Lake City'
}

var objTwo = {
  age: 28,
  ...objOne
}

console.log(objTwo)

ReactDOM.render(
  <h1>Boilerplate/ Blueprint App</h1>,
  document.getElementById('app')
)
