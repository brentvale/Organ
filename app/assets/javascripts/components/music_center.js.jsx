var MusicCenter = React.createClass({
  componentDidMount: function(){
    ApiUtil.fetchTracks();
  },
  render: function(){
    return(
      <div>
        <KeyBoard />
        <Recorder />
        <JukeBox  />
      </div>
    )
  }
})