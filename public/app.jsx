var Greeter = React.createClass({
  // we assign a default message incase no prop is passed in the class greeter.
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
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
        <p>{message + '!!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Enter Name</button>
        </form>
      </div>
    )
  }
})

var firstName = 'Ras Joh' // You can pass any kind of data in the component, not just strings.

ReactDOM.render(
  <Greeter name={firstName} message='This is a message from our prop!==>!'/>,
  document.getElementById('app')
)

// When returning the JSX, we only return one root element - (the div element is only one), It's the containter taht all other stuff we want to render out goes into.

// There's two types of data in a component, Props and State. Props get passed into the Component as you initialize it. e.g we initilized 'Greeter' with the name property(prop). While State is internally mainteined and updated by the component.
// *** A Component shouldn't Uupdate its own Props but it is allowed to Update its own State(render out the updated/changed parts of the code to the website/monitor).
