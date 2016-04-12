import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  author: attr('string'),
  text: attr('string'),
  'likes-count': attr('number'),
  'created-at': attr('date'),
  'updated-at': attr('date'),

  user: belongsTo('user')

});
