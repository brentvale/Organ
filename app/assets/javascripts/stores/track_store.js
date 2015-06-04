(function (root){
  var CHANGE_EVENT = "change";
  var _tracks = [];
  
  var addTrack = function(track){
    _tracks.push(track);
  };

  var removeSelectedTrack = function(track){
    var trackIdx = _tracks.indexOf(track);
    _tracks.splice(trackIdx, 1);
  };
  
  var addAllTracks = function(tracks){
    tracks.forEach(function(track){
      _tracks.push(track);
    })
  }
  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function(){
      return _tracks.slice(0);
    },
    removeTrack: function(track){
      removeSelectedTrack(track);
      this.emitChange();
      //is this legit?
      KeyStore.emitChange();
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
      case TrackConstants.SAVE_TRACK:
        addTrack(payload.track);
        TrackStore.emitChange();
        break;
      case TrackConstants.TRACKS_FETCHED:
        addAllTracks(payload.tracks);
        TrackStore.emitChange();
        break;
      }
    }),
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    }

  })
})(this)