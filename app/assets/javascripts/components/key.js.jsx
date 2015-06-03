var Key = React.createClass({
  getInitialState: function(){
    return ({pressed: false})
  },
  componentDidMount: function() {
    KeyStore.addChangeListener(this.onChange);
    this.note = new Note(this.props.freq);
  },
  componentWillUnmount: function() {
    KeyStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    if(KeyStore.find(parseInt(this.props.keyboardCode))){
      this.setState({pressed:true});
      this.note.start();
    } else {
      this.setState({pressed:false});
      this.note.stop();
    }
    // this.state.pressed ? this.setState({pressed: false}) : this.setState({pressed: true})
  },
  render: function(){
    var toDisplay = this.state.pressed ? <div className="piano-key-pressed"></div> : <div className="piano-key"></div>
    return(
      <div>{toDisplay}</div>
    )
  }
})