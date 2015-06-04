var TrackPlayer = React.createClass({
  getInitialState: function() {
    return ({displayControls: false})
  },
  displayPlayer: function(){
    this.state.displayControls ? this.setState({displayControls:false}) :
      this.setState({displayControls:true})
  },
  playTrack: function() {
    debugger
    this.props.track.play()
  },
  stopTrack: function() {
    this.props.track.stop()
  },
  deleteTrack: function() {
    TrackStore.removeTrack(this.props.track);
    this.setState({displayControls:false});
  },
  render: function(){
    var trackName = this.props.track.name;
    var trackDisplay = this.state.displayControls ?
      <div>
        <span className="play" onClick={this.playTrack}>Play</span>
        <span className="stop" onClick={this.stopTrack}>Stop</span>
        <span className="delete" onClick={this.deleteTrack}>Delete</span>
      </div> :
      <div></div>
    return(
      <div>
        <span onClick={this.displayPlayer}>{trackName}</span>
        <span>{trackDisplay}</span>
      </div>
    )
  }
})