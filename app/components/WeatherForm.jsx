const React = require('react');

const createReactClass = require('create-react-class');

const WeatherForm = createReactClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    const updates = {}
    const name = this.refs.name.value
    const message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }

    if (message.length > 0){
      this.refs.message.value = ''
      updates.message = message
    }

    this.props.onNewData(updates)
  },

  render () {
    return (
    <form onSubmit={this.onFormSubmit}>
      <div>
      <input type="text" ref="name" placeholder="Enter city name"/><br/>
      <div>
      </div>
      <button>Get Weather</button>
      </div>
    </form>
    )
  },
});

module.exports = WeatherForm
