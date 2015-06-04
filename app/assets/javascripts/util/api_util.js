ApiUtil = {
  fetchTracks: function(){
    $.ajax({
      type:"GET",
      url:"/api/tracks",
      success: function(resp){
        var tracks = resp.map(function(t){ 
          return new Track(t.name, t.roll);
        })
        TrackActions.tracksFetched(tracks);
      },
      error: function(resp){
        alert("errored out in fetchTracks Ajax call");
      }
    })
  },
  saveTrack: function(data){
    
    $.ajax({
      type:"POST",
      url: "/api/tracks",
      data: {
        track: {
          roll: JSON.stringify(data.roll),
          name: data.name
        }
      },
      success: function(resp){
        var track = new Track(resp.name, resp.roll);
        TrackActions.trackSave(track);
      },
      error: function(resp){
        alert("errored out in saveTrack Ajax call");
      }
    })
  }
}