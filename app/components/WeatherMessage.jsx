const React = require('react');

const createReactClass = require('create-react-class');

const WeatherText = React.createClass({
  render() {
    const name = this.props.name;
    const message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  },
});

module.exports = WeatherMessage
