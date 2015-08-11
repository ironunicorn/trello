window.Trello = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    var $rootEl = $(".content");
    new Trello.Routers.AppRouter($rootEl);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Trello.initialize();
});
