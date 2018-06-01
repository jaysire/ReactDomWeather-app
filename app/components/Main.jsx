const React = require('react');

const Nav = require('Nav');

// We start by importing/ requiring create-react-class;
const createReactClass = require('create-react-class');

//  This is the new/ updated way of creating Class Componnts;
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
