Trello.Views.BoardForm = Backbone.CompositeView.extend({
  template: JST['board_form'],
  events: {
    "submit form": "submitForm"
  },
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  submitForm: function(e) {
    e.preventDefault();
    var view = this;
    var formData = $(e.currentTarget).serializeJSON().board;
    this.model.set(formData);
    this.model.save({}, {
      success: function () {
        view.collection.add(view.model);
        Backbone.history.navigate(
          '/boards/' + view.model.get('id'),
          { trigger: true }
        );
      }
    })
  }
})
