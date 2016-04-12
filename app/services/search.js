import Ember from 'ember';

const {
  inject: { service },
  computed,
  isPresent,
  observer,
  isBlank
} = Ember;

export default Ember.Service.extend({
  store: service(),

  searchValue: null,
  searchResults: [],
  resultsEmpty: false,

  noResults: computed('resultsEmpty', 'searchValue', function() {
    if (this.get('resultsEmpty') &&
        isPresent(this.get('searchValue')) &&
        this.get('searchValue').length > 0) {
          return true;
       } else {
         return false;
       }
  }),

  results: computed('searchResults.[]', function() {
    return this.get('searchResults');
  }),

  _fetchSearchResults: observer('searchValue', function() {
    if (isBlank(this.get('searchValue'))) {
      return [];
    }

    this.get('store').query('search', {
      q: this.get('searchValue')
    }).then((results) => {
      if (results.get('length') > 0) {
        this.set('resultsEmpty', false);
      } else {
        this.set('resultsEmpty', true);
      }
      this.set('searchResults', results);
    });
  })
});
