
if(Meteor.isClient) {
  Template.tpioComments.helpers( {

    commentData: function () {
      return Template.instance().comments();
    },

  } );

  Template.tpioComments.onCreated(function () {

    // 1. Initialization
    var instance = this;

    // 2. Autorun
    instance.autorun(function () {


      // subscribe to the comments publication based on the params added to the template
      var subscription = instance.subscribe('comments', { collection : instance.data.collection, doc_id: instance.data.doc_id });

      if (subscription.ready()) {

      } else {

      }
    });

    // 3. Cursor
    instance.comments = function() {
      return Comments.find({});
    }

  });
}