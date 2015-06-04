var TrackActions = {
  trackSave: function(track) {
    var action = {
      actionType: TrackConstants.SAVE_TRACK,
      track: track
    }
    AppDispatcher.dispatch(action);
  },
  tracksFetched: function(tracks) {
    var action = {
      actionType: TrackConstants.TRACKS_FETCHED,
      tracks: tracks
    }
    AppDispatcher.dispatch(action);
  }
}