const React = require('react');

// const createReactClass = require('create-react-class');

// const About = createReactClass({
//   render() {
//     return (
//           <h3>This is the About Component</h3>
//     );
//   },
// });

class About extends React.Component {
  render() {
    return <div>It's the About page!</div>;
  }
}
  
module.exports = About;
