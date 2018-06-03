const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=81c7332841c2fe9821643d0776f26900&units=imperial';


// build url using new ES6 feature - template strings
module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    // we use back take quotation marks, $ and {} braces and everything we type in the braces is executed as regular jsp expression.
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // How to make the api request.
    axios.get(requestUrl).then((response) => {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, (response) => {
      throw new Error(response.data.message);
    });
  },
};
