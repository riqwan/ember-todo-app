// For more information see: http://emberjs.com/guides/routing/

Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed');
  });
});
