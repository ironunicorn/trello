Trello.Routers.AppRouter = Backbone.Router.extend({
  initialize: function ($rootEl){
    this.$rootEl = $rootEl;
    this.collection = new Trello.Collections.Boards();
  },

  routes: {
    '': 'index',
    'boards/new': "newBoard",
    'boards/:id': "showBoard"
  },

  index: function () {
    this.collection.fetch();
    var view = new Trello.Views.BoardIndex({
      collection: this.collection
    });
    this._swapView(view);
  },

  newBoard: function () {
    var newItem = new Trello.Models.Board();
    var view = new Trello.Views.BoardForm({
      model: newItem,
      collection: this.collection
    });
    this._swapView(view);
  },

  showBoard: function(id) {
    var board = this.collection.getOrFetch(id);
    var view = new Trello.Views.BoardShow({
      model: board
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }



})
