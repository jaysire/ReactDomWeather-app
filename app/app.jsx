const React = require('react');
import { everything } from '../public/bundle';
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

const Examples = require('Examples');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app'),
);

