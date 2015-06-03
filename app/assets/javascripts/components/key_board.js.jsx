var KeyBoard = React.createClass({

  render: function() {

    return (
      <div className="keyboard">
      {
       TONES.map(function(noteInfo){
          return <Key key={noteInfo[0]} freq={noteInfo[1]} keyboardCode={noteInfo[0]}/>
        })
      }
      </div>
    );
  }
});
