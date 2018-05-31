// Since we removed the 'script tags' from our 'div tags', we need to import React & ReactDOM to our app.jsx file.
var React = require('react')
var ReactDOM = require('react-dom')

<<<<<<< HEAD
ReactDOM.render(
  <h1>Tomorrow is going to be a good day! God willing!</h1>,
=======
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
>>>>>>> 26a5f1ae52a506ad22f587a3ea7fac4403fa800e
  document.getElementById('app')
)
