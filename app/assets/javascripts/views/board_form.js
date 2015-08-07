Trello.Views.BoardForm = Backbone.CompositeView.extend({
  template: JST['board_form'],
  events: {
    "submit form": "submitForm"
  },
  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },

  submitForm: function(e) {
    e.preventDefault();
    var view = this;
    var formData = $(e.currentTarget).serializeJSON().board;
    var newBoard = new Trello.Models.Board(formData);
    newBoard.save({}, {
      success: function () {
        view.collection.add(this);
        Backbone.history.navigate('boards/' + this.id)
      }
    })
  }
})
