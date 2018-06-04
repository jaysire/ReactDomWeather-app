const React = require('react');

const createReactClass = require('create-react-class');

const WeatherForm = createReactClass({
  onFormSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;
    // const message = this.refs.message.value;
    // we check if the location is  valied, and if it is then we call the Parent search function for the location which is in the Parent Component- which is the Weather jsx file in our case.
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  //   if (message.length > 0) {
  //     this.refs.message.value = '';
  //     updates.message = message;
  //   }

  //   this.props.onNewData(updates);
  // },

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter city name" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  },
});

module.exports = WeatherForm;
