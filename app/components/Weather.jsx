const React = require('react');

const createReactClass = require('create-react-class');

const Weather = createReactClass({
  onFormSubmit(e) {
    e.preventDefault();

    const updates = {};
    const name = this.refs.name.value;
    const message = this.refs.message.value;

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.oneNewData(updates);
  },

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
      <textarea ref="message" placeholder="Enter city name"/><br/><br/>
      </div>
      <div>
        <button>Get Weather</button>
      </div>
      </form>
    )
  },
});

module.exports = Weather;

