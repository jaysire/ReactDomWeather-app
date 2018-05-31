// this is Exporting in ES6.
var React = require('react')
// This is an example of a Presentational Component. It accesses two props that get passed from it via the parent. It renders them to the screen and its done.
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!</p>
      </div>
    )
  }
})

// Think of this as the return statement inside of a function. When you call a func whatever gets returned is the result you get when you require a file, whatever gets set to module Export is what you get back.
module.exports = GreeterMessage
