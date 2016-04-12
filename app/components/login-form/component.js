import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  isWorking: false,

  actions: {
    authenticateWithDevise() {
      this.set('isWorking', true);
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
        this.set('isWorking', false);
      });
    }
  }
});
