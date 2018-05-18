
const CityText = React.createClass({
  render: function () {
    return (
      
      <div>
        
        <h1>The City of Nairobi to Salt Lake City!</h1>
        
        <p>These are the places you need to visit, enjoy the culture and great opportunities! <br/> 
           Have you seen Shanghai City yet? You should! </p>

      </div>
    )
  }
})
const GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Vancouver City to St Cloud Minnesota!</h1>
        <p>You need to visit these places next. Great community, breath taking view for days!</p>

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

    const nameRef = this.refs.name
    const name = nameRef.value
    nameRef.value = ''

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      })
    }
  },

  render: function () {
    const name = this.state.name
    const message = this.props.message

    return (
      <div>

        <h1> Hello {name}! </h1>

        <p>{message + '!!'}</p>

        <p>Learning coding is fun and rewarding!< br /> Ras Joh ! Yoh !</p>

        <CityText/>

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
    )}
})
const firstName = 'JohSire'
const message = 'This is a paragraph made up of words, symbols, character and more.'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app'))
