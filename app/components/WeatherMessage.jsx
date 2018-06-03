const React = require('react');

const createReactClass = require('create-react-class');

const WeatherMessage = createReactClass({
  render() {
    const {temp, location} = this.props;
      return (
        <h3>It's {temp} in {location}!</h3>
      );
  },
});

module.exports = WeatherMessage;
