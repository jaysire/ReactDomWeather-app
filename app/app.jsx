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

//  Everything gets rendered out thru this page/ router componenet
// First thing we add is the Router history which tells react router that we want to use(in our page url/path) the pound sign(#) followed by the path provided in order to maintain the routes for our app.
// Route: matches everything and it renders our the main compnnt and inised of it we have a few other matchers.
// e.g forward slash "about" matches the About componnt and renders it out. And so on and so forth. and if we dont click/match it with any other page, 'Weather' is rendered out/ displayed by default. It's our home/landing page.
