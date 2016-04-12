import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  author: attr('string'),
  message: attr('string'),
  username: attr('string'),
  'user-id': attr('string'),
  'from-user-id': attr('string'),
  'comments-count': attr('number'),
  'likes-count': attr('number'),
  'reposts-count': attr('number'),
  'created-at': attr('date'),
  'updated-at': attr('date'),

  user: belongsTo('user'),
  comments: hasMany('comment', { polymorphic: true })
});
