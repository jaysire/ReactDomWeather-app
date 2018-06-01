const React = require('react');

const ReactDOM = require('react-dom');

// const PropTypes = require('prop-types');

const {
  Route, Router, IndexRoute, hashHistory,
} = require('react-router');
// the above obj distructuring syntax is the same as this but for each of our variables:      const Route = require('react-router').Route

const Main = require('Main');
const Nav = require('Nav');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>,
    </Route>
  </Router>,
  document.getElementById('app'),
);

