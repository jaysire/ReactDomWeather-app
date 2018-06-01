const React = require('react');

// links helps us link/ wire all our pages to-each-other so they can communicate.
const { Link } = require('react-router');

const createReactClass = require('create-react-class');

const Nav = createReactClass ({
  render() {
    return (
      <div>
        <h2>Good Morning Salt Lake City! Text from the Nav page! YOLO!!!</h2>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );},
});

module.exports = Nav;
