var JukeBox = React.createClass({
  getInitialState: function() {
    return ({tracks: TrackStore.all()});
  },
  componentDidMount: function(){
     TrackStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    TrackStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    this.setState({tracks: TrackStore.all()});
  },
  render: function(){
    return(
      <ul>
        {
          this.state.tracks.map(function(track){
            return(
              <li><TrackPlayer key={track.id} track={track}/></li>
            )
          })
        }
      </ul>
      
    )
  }
})