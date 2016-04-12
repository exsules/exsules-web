import Ember from 'ember';

const { inject: { service }, observer, run } = Ember;

export default Ember.Component.extend({
  search: service(),

  query: null,

  _valueChanged: observer('query', function() {
    run.debounce(this, function() {
      if (this.get('query').length > 2) {
        this.set('search.searchValue', this.get('query'));
      } else if (this.get('query').length === 0) {
        this.set('search.searchResults', []);
      }
    }, 200);
  }),
});
