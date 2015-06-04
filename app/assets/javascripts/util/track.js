var Track = function(name, roll){
  this.name = name;
  this.roll = roll || [];
  this.timeStart;
  this.timeStop;
  this.completeTrack = false;
  this.currentNotesIndex = 0;
  this.playingTime = 0;
  this.playingNotes = [];
  this.id = this.getTrackId();
}

Track.prototype = {
  getTrackId: function(){
    var tracks = TrackStore.all();
    return tracks.length
  },
  record: function() {
    this.timeStart = Date.now();
  },
  stopRecording: function() {
    this.addNotes("end");
    this.completeTrack = true;
  },
  addNotes: function(currentNotes) {
    var newTime = Date.now();
    var deltaTime = newTime - this.timeStart;
    this.roll.push({time: deltaTime, notes: currentNotes});
  },
  stopPlayingNotes: function() {
    for(var i = 0; i < this.playingNotes.length; i ++){
      this.playingNotes[i].stop();
    }
    this.playingNotes = [];
  },
  startPlayingNotes: function(notes){
    for(var i = 0; i < notes.length; i ++){
      var noteToPlay = new Note(NOTEPLAY[notes[i]]);
      noteToPlay.start()
      this.playingNotes.push(noteToPlay);
    }
  },
  checkNotes: function() {
    this.playingTime += 10;
    if(this.currentNotesIndex >= (this.roll.length - 1)){
      this.resetTrack();
    }
    if(this.roll[this.currentNotesIndex].time < this.playingTime){
      //need to find the difference 
      this.stopPlayingNotes();
      var notes = this.roll[this.currentNotesIndex].notes;
      this.startPlayingNotes(notes);
      this.currentNotesIndex += 1;
    }
  },
  play: function() {
    var that = this;
    this.notesInterval = setInterval(that.checkNotes.bind(that), 10);
  },
  resetTrack: function() {
    clearInterval(this.notesInterval);
    this.playingNotes.forEach(function(note){
      note.stop();
    });
    this.playingTime = 0;
    this.currentNotesIndex = 0;
  }, 
  stop: function() {
    this.resetTrack();
  }
}