const React = require('react');

const createReactClass = require('create-react-class');
const About = createReactClass({
    render: function(){
        return (
          <h3>This is the About Component</h3>
        );
    }
});

module.exports = About;