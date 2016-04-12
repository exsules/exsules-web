import Ember from 'ember';
import DS from 'ember-data';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  'first-name': attr('string'),
  'last-name': attr('string'),
  username: attr('string'),
  location: attr('string'),
  sex: attr('string'),
  birthday: attr('date'),
  role: attr('string'),
  slug: attr('string'),

  'full-name': computed('first-name', 'last-name', function() {
    return `${this.get('first-name')} ${this.get('last-name')}`;
  }),

  posts: hasMany('post')
});
