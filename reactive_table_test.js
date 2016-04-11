if (Meteor.isClient) {
  Template.hello.onCreated(function () {
    Session.set('filterId', "1")
  });

  Template.hello.helpers({
    classifier: function () {
      return Classifier.find({struct_id: Session.get('filterId')});
    },
    tabs: function () {
      return ClassifierStructure.find();
    },
    tableSettings: function() {
    return {
      fields: [
        {
          key: 'title',
          label: 'title'
        }
      ]
    };
  }
  });

  Template.hello.events({
    'click li': function(event, instance) {
    // increment the counter when button is clicked
    Session.set('filterId', this._id);
  },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
