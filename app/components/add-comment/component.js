import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  currentUser: service('current-user'),
  isPosting: false,
  text: '',

  isDisabled: Ember.computed('text.length', 'isPosting', function() {
    if (this.get('isPosting')) {
      return true;
    }
    if (this.get('text.length') === 0) {
      return true;
    }
    return false;
  }),

  actions: {
    addComment() {
      this.get('onSubmit')();
      //this.sendAction('setAction', this.get('currentUser').user, this.get('text'));
    }
  }

});
