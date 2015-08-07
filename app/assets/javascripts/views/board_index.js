Trello.Views.BoardIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addBoardListItem);
    this.collection.each(this.addBoardListItem.bind(this));
    this.listenTo(this.collection, 'remove', this.removeBoardListItem);
  },
  template: JST['board_index'],
  render: function () {
    this.$el.html(this.template());
    this.attachSubviews();
    return this;
  },

  addBoardListItem: function (board) {
    var subview = new Trello.Views.BoardListItem({
      model: board
    });
    this.addSubview('ul', subview);
  },

  removeBoardListItem: function (board) {
    this.removeModelSubview('ul', board);
  }
})
