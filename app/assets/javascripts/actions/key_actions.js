KeyActions = {
  keyPress: function(key){
    var action = {
      actionType: KeyConstants.KEY_PRESSED,
      key: key
    }
    AppDispatcher.dispatch(action);
  },
  keyRelease: function(key){
    var action = {
      actionType: KeyConstants.KEY_RELEASED,
      key: key
    }
    AppDispatcher.dispatch(action);
  }
}