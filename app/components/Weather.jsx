const React = require('react');

const WeatherForm = require('WeatherForm');

const WeatherMessage = require('WeatherMessage');

const openWeatherMap = require('openWeatherMap');


const createReactClass = require('create-react-class');

const Weather = createReactClass({
  getInitialState() {
    return {
      location: 'Miami',
      temp: 88,
    };
  },
  handleSearch(location) { 
    const that=this;
    openWeatherMap.getTemp(location).then((temp) => {
      that.setState ({
        location: location,
        temp: temp,
      })
    }, (errorMessage) => {
      alert(errorMessage);
    });
    // this.setState({
    //   location,
    //   temp: 23,
    // });
  },
  render() {
    // this is how you pull/ access the state values (in our case, temo and location), so you can pass them as props thru our WeatherMessage component. ES6 distructuring.
    const { temp, location } = this.state;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
        {/* we pass temp and location props thru WForm compnnt and set them to temp and location variables, that we just accessed/ made available above. Hence being our Classic Presentational Comp: i.e all it does is take the two variables (temp and loctn) and render them to the screen */}
      </div>
    );
  },
});

module.exports = Weather;

