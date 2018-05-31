// Our Greeter Compnnt is an example of a Containter Compnnt. It maintains State for the application; like the name attribute. & when State gets updated, it updates its children. So if the State gets a new name(user keys in in the form input); Message is going to re-render becz it relies on the 'name' state.

var React = require('react')
var GreeterMessage = require('GreeterMessage')
var GreeterForm = require('GreeterForm')

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
      name: this.props.name,
      message: this.props.message
    }
  },
  // ** State CAN be changed, but Propoerties (prop values to be exact), CANNOT be changed in React.
  handleNewData: function (updates) {
    this.setState(updates)
  },

  // for React to re-render the Comp we need to call set State: 1) so we can set a new value for 'name' 2). So we can re-render our Component if it depends on the 'name' State; which it does in our example/case.

  // set state takes an obj and only sets the state for the attributes that you provide, and in our case we only have 'name' that is set to the 'name' variable initialized above.

  render: function () {
    var name = this.state.name
    var message = this.state.message

    return (
      <div>

        {/* Nesting our GreeterMessage Component to our Greeter Component. */}
        <GreeterMessage name = {name} message = {message}/>

        <GreeterForm onNewData = {this.handleNewData} />
        {/* When you have a 'Parent' handling an 'Event' from the 'Child' you call the 'Parent handle' followed by the 'chosen name' and then you call in the 'Child 'with 'on', followed by the 'chosen name.'  */}

        {/* We only have ONE root div that renders our Chidren only, this is perfect; it's what we want. */}

      </div>
    )
  }
})

module.exports = Greeter
