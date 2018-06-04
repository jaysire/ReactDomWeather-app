const React = require('react');

const createReactClass = require('create-react-class');

const WeatherForm = createReactClass({
  onFormSubmit(e) {
    e.preventDefault();

    const location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

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
