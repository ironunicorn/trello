Trello.Views.BoardListItem = Backbone.CompositeView.extend({
  template: JST['board_list_item'],

  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  events: {
    "click": "showBoard"
  },

  showBoard: function () {
    Backbone.history.navigate(
      "/boards/" + this.model.escape("id"),
      {trigger: true}
    );
  }
})
