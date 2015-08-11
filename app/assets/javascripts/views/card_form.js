Trello.Views.CardForm = Backbone.CompositeView.extend({
  template: JST['card_form'],
  tagName: 'form',
  events: {
    'submit': 'createCard'
  },
  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },
  createCard: function (e) {
    e.preventDefault();
    var view = this;
    var formData = this.$el.serializeJSON().card;
    this.model.set(formData);
    var list_id = this.model.get('list_id');
    this.model.save({}, {
      success: function () {
        view.collection.add(view.model);
        view.model = new Trello.Models.Card({ list_id: list_id });
        view.render();
      }
    })
  }

});
