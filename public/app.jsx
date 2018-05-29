// This is an example of a presentational component. It accesses two props that get passed from it via the parent. It renders them to the screen and its done.
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>Hello! {message}?</p>
      </div>
    )
  }
})

// This is also a Presentational Componnt. Since it also does not maintain its own State. It simply takes some Props, renders the form and when the form gets submited, it calls a function. It doesn't care if the State ever gets updated; all it knows is that its going to get passed on a new name fuction and its going to call it with the name when it gets updated.
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    var name = this.refs.name.value

    if (name.length > 0) {
      this.refs.name.value = ''
      this.props.onNewName(name)
    }
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name"/>
        <button>Set Name</button>
      </form>
    )
  }
})

// Our Greeter Compnnt is an example of a Containter Compnnt. It maintains State for the application; like the name attribute. & when State gets updated, it updates its children. So if the State gets a new name(user keys in in the form input); Message is going to re-render becz it relies on the 'name' state.

var Greeter = React.createClass({
  // we assign a default message incase no prop is passed in the class greeter.
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    }
  },

  // React inbuilt method w/ an anonymous func that does not need to take any arguments. it returns an obj that gets set to 'this'dot state very similar to set default props as seen above.

  // ** Since a Comp is only allowed to maintain/change its state we create the above state where the user will input data/info and Comp will capture the data and render it out/ update our website to reflect the new input info from the client/user.

  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  // ** State CAN be changed, but Propoerties (prop values to be exact), CANNOT be changed in React.
  handleNewName: function (name) {
    this.setState({
      name: name
    })
  },

  // for React to re-render the Comp we need to call set State: 1) so we can set a new value for 'name' 2). So we can re-render our Component if it depends on the 'name' State; which it does in our example/case.

  // set state takes an obj and only sets the state for the attributes that you provide, and in our case we only have 'name' that is set to the 'name' variable initialized above.

  render: function () {
    var name = this.state.name
    var message = this.props.message

    return (
      <div>

        {/* Nesting our GreeterMessage Component to our Greeter Component. */}
        <GreeterMessage name = {name} message = {message}/>

        <GreeterForm onNewName = {this.handleNewName} />
        {/* When you have a 'Parent' handling an 'Event' from the 'Child' you call the 'Parent handle' followed by the 'chosen name' and then you call in the 'Child 'with 'on', followed by the 'chosen name.'  */}

        {/* We only have ONE root div that renders our Chidren only, this is perfect; it's what we want. */}

      </div>
    )
  }
})

var firstName = 'Ras Joh' // You can pass any kind of data in the component, not just strings.

ReactDOM.render(
  <Greeter name={firstName} message='This is a message from our prop!==>' />,
  document.getElementById('app')
)

// When returning the JSX, we only return one root element - (the div element is only one), It's the containter taht all other stuff we want to render out goes into.

// There's two types of data in a component, Props and State. Props get passed into the Component as you initialize it. e.g we initilized 'Greeter' with the name property(prop). While State is internally mainteined and updated by the component.
// *** A Component shouldn't Uupdate its own Props but it is allowed to Update its own State(render out the updated/changed parts of the code to the website/monitor).

// ** Data Flow Break-Down:
// 1). Props get defined, as either default to the one passed in or React.
// 2). Get Initial State, sets its name state to the Props value
// 3). Down in the render func we use this.dot name to fetch (we initialize and store it in the name variable and call it down in the 'ref' of the form input section) the value and we display it to the screen using the form and input functionalities.
// 4). When a user submits the form, we call this dot state which updates the state and re-render the parts of the Component that matter.
// Presentational Components: (Will be blue and green in our case). They render out something visible on the computer screen, or sometimes they can be set up where they respond to user input. e.g we have a form with an input field and a button gets clicked.
// Presentational Comps do not maintain state, they're dummy comps; they simply render stuff to the browser and call functions when a user interacts with content.
// Container Component: (Will be the red one in our case). They DO maintain State. And in our case, the r'ed compo' will maintain the 'name' State. When it gets changed by the blue compo it will re-render the green compo. because it automatically re-renders children when it's state changes and the children rely on it.

// Presentational Components- render something to the browser
// Container Components - Maintain State and render children/nested components
