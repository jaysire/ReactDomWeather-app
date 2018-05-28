var Greeter = React.createClass({
  // we added a defaul anonymous func so it displays the mesge on the browser when none is set.
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is our default message! Boooyyyy!'
      // message: 'This is the default message!!'
    }
  },
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!<==!'}</p>


        {/* <p>This is from the first Component!<br/><br/>...and then one day I got sucked into a warmhole! ...<br/>Consequences Boooyyyyy!! (Key&Peele).</p>

        <h2>YOLO {message}!</h2>
        <p>Message from the second Component! <br/><br/>...and then one day, a piano fell on my head!... <br/> Consequences Boooyyyyy!! (Key&Peele).</p> */}

      </div>
    )
  }
})

var firstName = 'Ras Joh' // You can pass any kind of data in the component, not just strings.

ReactDOM.render(
  <Greeter name= {firstName}/>,
  document.getElementById('app')
)

// When returning the JSX, we only return one root element - (the div element is only one), It's the containter taht all other stuff we want to render out goes into.
