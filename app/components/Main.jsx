const React = require('react');
const Nav = require('Nav');

const createReactClass = require('create-react-class');

const Main = createReactClass({
  render: function(){
      return (
        <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
      );
  }
});

module.exports = Main;




