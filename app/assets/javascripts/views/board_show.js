Trello.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addListView);
    this.model.lists().each(this.addListView.bind(this));
    // this.addListForm();
    this.listenTo(this.model.lists(), "remove", this.removeListView);
  },

  template: JST['board_show'],

  events: {
    "click button.new-list": "openForm"
  },

  render: function() {
    this.$el.html(this.template({board: this.model}));
    this.attachSubviews();
    return this;
  },

  openForm: function () {
    var subview = new Trello.Views.ListForm({
      collection: this.model.lists(),
      model: new Trello.Models.List({board_id: this.model.get("id")})
    });
    this.$(".new-list-form").html(subview.render().$el);
  },

  // addListForm: function () {
  //   var subview = new Trello.Views.ListForm({
  //     collection: this.model.lists(),
  //     model: new Trello.Models.List({board_id: this.model.get("id")})
  //   });
  //
  //   this.addSubview(".list-form", subview);
  // },

  addListView: function(list) {
    var subview = new Trello.Views.ListListItem({
      model: list
    });

    this.addSubview(".lists", subview);
  },

  removeListView: function(list) {
    this.removeModelSubview(".lists", list);
  },

  // removeListForm: function(form) {
  //   this.removeModelSubview(".list-form", form);
  // }


})
