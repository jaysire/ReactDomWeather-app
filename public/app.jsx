var Greeter = React.createClass({
  // we added a defaul anonymous func so it displays the mesge on the browser when none is set.
  getDefaultProps: function () {
    return {
      name: 'React'
    }
  },
  render: function () {
    var name = this.props.name
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>This is from the Component!!<br/>...and then one day I got sucked into a warmhole ...<br/>Consequences Boooyyyyy!! (Key&Peele)</p>

      </div>
    )
  }
})

ReactDOM.render(
  <Greeter name='Josire'/>,
  document.getElementById('app')
)

// When returning the JSX, we only return one root element - (the div element is only one), It's the containter taht all other stuff we want to render out goes into.
