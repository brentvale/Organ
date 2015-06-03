var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <ReactRouter.DefaultRoute handler={KeyBoard}/>
  </Route>
);

$(function() {
  ReactRouter.run(routes, function(Handler) {
    var root = document.getElementById('content');
    React.render(<Handler/>, root);
  });
})