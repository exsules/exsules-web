import Ember from 'ember';
import ApplicationRuteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRuteMixin, {
  currentUser: service('current-user'),

  model() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invlidate());
  },

  _loadCurrentUser() {
    return this.get('currentUser').loadCurrentUser();
  }

});
