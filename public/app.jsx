// Since we removed the 'script tags' from our 'div tags', we need to import React & ReactDOM to our app.jsx file.
var React = require('react')
var ReactDOM = require('react-dom')
var Greeter = require('Greeter')

var firstName = 'Ras Joh' // You can pass any kind of data in the component, not just strings.

ReactDOM.render(
  <Greeter name={firstName} message='This is a default message from our prop!' />,
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
