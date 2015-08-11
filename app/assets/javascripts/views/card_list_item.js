Trello.Views.CardListItem = Backbone.CompositeView.extend({
  template: JST['card_list_item'],
  className: 'card-item',
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function() {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

});
