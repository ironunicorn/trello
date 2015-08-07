Trello.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['board_show'],

  render: function() {
    this.$el.html(this.template({board: this.model}));
    return this;
  }
})
