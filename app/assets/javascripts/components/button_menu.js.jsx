var ButtonMenu = React.createClass({
  getInitialState: function() {
    return({recording: false, saved: false})
  },
  componentDidMount: function() {
    KeyStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function() {
    KeyStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    var currentNotes = KeyStore.pressedKeys();
    this.track.addNotes(currentNotes);
  },
  onClickRecord: function() {
    
    this.track = new Track("brent");
    if(!this.state.recording){
      this.track.record();
      this.setState({recording:true, saved:false});
    }
  },
  onClickStop: function() {
    this.track.stopRecording();
    this.setState({recording:false});
  },
  onClickPlay: function() {
    this.track.play();
  },
  saveTrack: function(){
    ApiUtil.saveTrack(this.track);
    // TrackActions.trackSave(this.track);
    this.setState({saved: true});
  },
  render: function() {
    var recordButton = this.state.recording ? 
      <div className="record-button" onClick={this.onClickStop}>Stop</div> : 
      <div className="record-button" onClick={this.onClickRecord}>Record</div>
    
    if(this.track){
      if(!this.state.saved && this.track.completeTrack){
        var playButton = 
        <div>
          <div className="play-button" onClick={this.onClickPlay}>Play</div>
          <div className="save-track" onClick={this.saveTrack}>Save</div>
        </div>
      }
    }
    
    // var playButton = this.props.track.completeTrack ?
//
//     :
//       <div className="no-play-button">Play</div>
      
    return(
      <div>
        {recordButton}
        {playButton}
      </div>
    )
  }
})