const React = require('react');

const WeatherForm = require('WeatherForm');

const WeatherMessage = require('WeatherMessage');

const createReactClass = require('create-react-class');

const Weather = createReactClass({
  render () {
    return (
      <div>      
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    );
  },
});

module.exports = Weather;

