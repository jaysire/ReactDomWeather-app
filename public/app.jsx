
const GreeterText = React.createClass({
  render: function () {
    return (
      <div>
        <h1>First Try Component!</h1>
        <p>This is the first paragraph in my component</p>

      </div>
    )
  }
})
const GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1 Titile</h1>
        <p>Some Paragraph</p>

      </div>
    )
  }
})

const Greeter = React.createClass({
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

    const
      nameRef = this.refs.name
    const
      name = nameRef.value
    nameRef.value = ''

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      })
    }
  },

  render: function () {
    const
      name = this.state.name
    const
      message = this.props.message

    return (
      <div>

        <h1> Hello {name}! </h1>

        <p>{message + '!!'}</p>

        <p>Learning coding is fun and rewarding!< br /> Ras Joh ! Yoh !</p>

        <GreeterText/>

        <GreeterMessage/>

        <form>

          <input type='text' ref='name'/>

          <button>Name Here</button>

        </form>

        <form onSubmit={this.onButtonClick}>

          <input type="text" ref="name"/>

          <button>Set Name</button>

        </form>

      </div >
    )
  }
})
const firstName = 'JohSire'
const message = 'This is a paragraph made up of words, symbols, character and more.'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app'))
