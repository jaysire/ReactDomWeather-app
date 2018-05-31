// Since we removed the 'script tags' from our 'div tags', we need to import React & ReactDOM to our app.jsx file.
var React = require('react')
var ReactDOM = require('react-dom')

ReactDOM.render(
  <div>
    <h1>Hello Salt Lake City!</h1>
    <p>
    This is a great time to be alive!<br/>
    In everything you do, remember to put God first.<br/>
    Everything else will fall in its right place, efortlessly!
    </p>
  </div>,
  document.getElementById('app')
)
