const React = require('react');

const WeatherForm = require('WeatherForm');

const WeatherMessage = require('WeatherMessage');

const createReactClass = require('create-react-class');

const Weather = createReactClass({
  handleSearch (location) {
    alert(location);
  },
  render() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage />
      </div>
    );
  },
});

module.exports = Weather;

