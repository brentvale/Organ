var Recorder = React.createClass({
  getInitialState: function() {
    return({hasTrack: false})
  },
  componentDidMount: function(){
    this.setState({hasTrack: true});
  },
  render: function(){
    var buttonMenu = this.state.hasTrack ?
      <ButtonMenu track={this.track}/> :
      <div>No track to play yet</div>
    return(
      <div>
        {buttonMenu}
      </div>
    )
  }
})