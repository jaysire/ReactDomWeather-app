// This is also a Presentational Componnt. Since it also does not maintain its own State. It simply takes some Props, renders the form and when the form gets submited, it calls a function. It doesn't care if the State ever gets updated; all it knows is that its going to get passed on a new name fuction and its going to call it with the name when it gets updated.

var React = require('react')

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    var updates = {}
    var name = this.refs.name.value
    var message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }

    if (message.length > 0) {
      this.refs.message.value = ''
      updates.message = message
    }

    this.props.onNewData(updates)
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder='Enter name'/><br/><br/>
        </div>
        <div>
          <textarea ref="message" placeholder='Enter message'></textarea><br/><br/>
        </div>
        <div>
          <button>Push to Submit</button>
        </div>
      </form>
    )
  }
})

module.exports = GreeterForm
