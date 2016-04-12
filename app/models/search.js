import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  'first-name': attr('string'),
  'last-name': attr('string'),
  'username': attr('string')
});
