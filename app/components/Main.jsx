const React = require('react');

// We start by importing/ requiring create-react-class;
const createReactClass = require('create-react-class');

//  This is the new/ updated way of creating Class Componnts;
const Main = createReactClass({
  render() {
  return ( <h2>This is a message from the Main Component!......Wazzzzzzzzuuuuuuuuppppppppppp!!!!!</h2>
  )},
});

module.exports = Main;

// This is the old/ outdated syntax of creating React Class Components.

// const Main = React.createClass({
//   render() {
//     return (
//       <h2>Main Component!</h2>
//     );
//   },
// });

