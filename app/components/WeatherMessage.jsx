const React = require('react');

const createReactClass = require('create-react-class');

const WeatherMessage = createReactClass({
  render() {
      return (
        <h3>It's 40 in Salt Lake City!</h3>
      );
  },
});

module.exports = WeatherMessage;
