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
        <h2>This is a text from the Main Component!</h2>
      </div>
    )},
});

module.exports = Main;
