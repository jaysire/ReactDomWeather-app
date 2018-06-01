const React = require('react');

const Nav = require('Nav');

const createReactClass = require('create-react-class');

const Main = createReactClass({
  render() {
    return (
      <div>
        <Nav />
        <h2>Hello Salt Lake City! From the Main Component!Waazzzuuupppp!!!!</h2>
        {this.props.children}
      </div>
    )},
});

module.exports = Main;
