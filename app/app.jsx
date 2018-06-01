const React = require('react');
const ReactDOM = require('react-dom');
// const PropTypes = require('prop-types');
const {
  Route, Router, IndexRoute, hashHistory,
} = require('react-router');
// the above obj distructuring syntax is the same as this but for each of our variables:
// const Route = require('react-router').Route

const Main = require('Main');

const Weather = require('Weather');

const About = require('About');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
