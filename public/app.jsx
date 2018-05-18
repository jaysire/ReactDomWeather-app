var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the defaule message  that appears when no props are passed through the component.'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  onButtonClick: function (e) {
    e.preventDefault()

    var nameRef = this.refs.name
    var name = nameRef.value
    nameRef.value = ''
    
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      })
    }
    },
    
  render: function () {
    var name = this.state.name
    var message = this.props.message

    return (
      <div>
        <h1> Hello {name}! </h1>
        <p>{message + '!!'}</p>
        <p>Learning coding is fun and rewarding!< br /> Ras Joh ! Yoh !</p>

        <form onSubmit={this.onButtonClick}>

          <input type="text" ref="name"/>,

          <button>Set Name</button>

        </form>

      </div >
    )
  }
})
var firstName = 'JohSire';
var message = 'This is a paragraph made up of words, symbols, character and more.'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app'))
