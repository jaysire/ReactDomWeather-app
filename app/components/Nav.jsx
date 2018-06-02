const React = require('react');

// links helps us link/ wire all our pages to-each-other so they can communicate.
const { Link } = require('react-router');

const createReactClass = require('create-react-class');

const Nav = createReactClass({
  render() {
    return (
      <div>
        <h2>
          Where is the Nav system?!
        </h2>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </div>
    );
  },
});

module.exports = Nav;

// Link helps add custom styles and classes to the element to the element to the link of the current page. Customize each page to make them unique so the user knows what page they're in/ looking at.
// Link takes care of all the logic needed to match up the links with the visible pages.
// add class to our components.
