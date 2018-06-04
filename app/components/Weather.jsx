const React = require('react');

const WeatherForm = require('WeatherForm');

const WeatherMessage = require('WeatherMessage');

const openWeatherMap = require('openWeatherMap');

const createReactClass = require('create-react-class');

const Weather = createReactClass({
  getInitialState() {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    const that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function
      (temp) {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false,
        });
      }, function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
      });
  },
  render: function () {
    const { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
