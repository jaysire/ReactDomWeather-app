var Greeter = React.createClass({
  // we added a defaul anonymous func so it displays the mesge on the browser when none is set.
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is our default message from our prop! Boooyyyy!'
      // message: 'This is the default message!!'
    }
  },
  onButtonClick: function (e) {
    e.preventDefault()

    var name = this.refs.name.value

    alert(name)
  },
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!<==!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref='name' />
          <button>Enter Name</button>
        </form>

      </div>
    )
  }
})

var firstName = 'Ras Joh' // You can pass any kind of data in the component, not just strings.

ReactDOM.render(
  <Greeter name= {firstName} message='This is a message from our prop!==>!'/>,
  document.getElementById('app')
)

// When returning the JSX, we only return one root element - (the div element is only one), It's the containter taht all other stuff we want to render out goes into.
