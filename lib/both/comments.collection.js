Comments = new Meteor.Collection("comments");

//Add Data to comments before they are inserted
Comments.before.insert(function (userId, doc) {
  doc.created_on = new Date().getTime();
  doc.user_id = userId;
});

Comments.allow({
  'insert': function(userId, doc) {
      return true;
  },

  'update': function(userId, docs, fields, modifier) {
    return true;
  },

  'remove': function(userId, docs) {
      return true;
  }
});
