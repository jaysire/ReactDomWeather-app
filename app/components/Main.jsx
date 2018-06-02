const React = require('react');

const Nav = require('Nav');

const createReactClass = require('create-react-class');

const Main = createReactClass({
  render() {
    return (
      <div>
        <Nav />
        <h2>
          Obviously you the Main thing here!
        </h2>
        {this.props.children}
      </div>
    )},
});

module.exports = Main;
