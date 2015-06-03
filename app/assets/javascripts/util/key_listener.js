$(document).on("keydown", function (e) {
  KeyActions.keyPress(e.keyCode);
})

$(document).on("keyup", function (e) {
  KeyActions.keyRelease(e.keyCode);
})