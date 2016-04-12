import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  currentUser: service('current-user'),
  isPosting: false,
  message: '',

  isDisabled: Ember.computed('message.length', 'isPosting', function() {
    if (this.get('isPosting')) {
      return true;
    }
    if (this.get('message.length') === 0) {
      return true;
    }
    return false;
  }),

  actions: {
    newPost() {
      //this.set('isPosting', true);
      this.sendAction('setAction', this.get('currentUser').user, this.get('target'), this.get('message'));
    }
  }
});
