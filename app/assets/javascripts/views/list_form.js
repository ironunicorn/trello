Trello.Views.ListForm = Backbone.CompositeView.extend({
  template: JST['list_form'],
  tagName: 'form',
  className: 'list-item',
  events: {
    'submit': 'createList'
  },
  render: function () {
    this.$el.html(this.template({ list: this.model }));
    return this;
  },
  createList: function (e) {
    e.preventDefault();
    var view = this;
    var formData = this.$el.serializeJSON().list;
    this.model.set(formData);
    var board_id = this.model.get('board_id');
    this.model.save({}, {
      success: function () {
        view.collection.add(view.model);
        view.model = new Trello.Models.List({ board_id: board_id });
        view.render();
      }
    })
  }

});
