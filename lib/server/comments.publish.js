//Publish comments based on a collection type and configured options
// Normal Schema
// {
//  collection  : 'someCollection',
//  doc_id      : 'someDocumentIdFromTheCollection'
//  user_id     : 'someUserId',
//  message     : 'example comment'
//  created_on  : 'someTimeStamp'
// }
// EXAMPLE:
//Meteor.subscribe('comments', {
// collection: 'articles'
// doc_id : _id
// })

Meteor.publish('comments', function(options) {
  return Comments.find(options);
});