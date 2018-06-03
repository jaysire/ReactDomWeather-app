const React = require('react');
const {Link, IndexLink} = require('react-router');

const createReactClass = require('create-react-class');

const Nav = createReactClass({
  render: function(){
      return (
        <div>
        <h2>How about that Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Nav</IndexLink>
        <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
      );
  }
});

module.exports = Nav;
