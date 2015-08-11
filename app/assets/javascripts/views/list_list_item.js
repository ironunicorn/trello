Trello.Views.ListListItem = Backbone.CompositeView.extend({
  template: JST['list_list_item'],
  className: 'list-item "ui-state-default"',
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCardView);
    this.model.cards().each(this.addCardView.bind(this));
    this.addCardForm();
    this.listenTo(this.model.cards(), "remove", this.removeCardView);
  },

  render: function() {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    return this;
  },

  addCardForm: function () {
    var subview = new Trello.Views.CardForm({
      collection: this.model.cards(),
      model: new Trello.Models.Card({list_id: this.model.get("id")})
    });

    this.addSubview(".card-form", subview);
  },


  addCardView: function(card) {
    var subview = new Trello.Views.CardListItem({
      model: card
    });

    this.addSubview(".cards", subview);
  },

  removeCardView: function(card) {
    this.removeModelSubview(".cards", card);
  },
  removeCardForm: function(form) {
    this.removeModelSubview(".card-form", form);
  }

});
