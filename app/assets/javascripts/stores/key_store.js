(function(root){
  var CHANGE_EVENT = "change";
  var _pressedKeys = [];
  
  var addKey = function(key){
    if(!KeyStore.find(key)){
      _pressedKeys.push(key);
    }
  }
  
  var removeKey = function(key){
    var keyIdx = _pressedKeys.indexOf(key);
    if(KeyStore.find(key)){
      _pressedKeys.splice(keyIdx, 1);
    }
  }
  
  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    pressedKeys: function(){
      _pressedKeys.forEach(function(key){
        console.log(key);
      });
      
    },
    find: function(noteInteger){
      for(var i = 0; i < _pressedKeys.length; i ++){
        if(_pressedKeys[i] === noteInteger){
          return true;
        }
      }
      return false;
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
      case KeyConstants.KEY_PRESSED:
        addKey(payload.key);
        KeyStore.emitChange();
        break;
      case KeyConstants.KEY_RELEASED:
        removeKey(payload.key);
        KeyStore.emitChange();
        break;
      }
    }),
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    }
    
  })
})(this)