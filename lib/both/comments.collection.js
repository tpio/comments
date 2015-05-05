Comments = new Meteor.Collection("comments");
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
