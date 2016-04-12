import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import Ember from 'ember';
import config from 'exsules/config/environment';

const { RSVP, isEmpty, run  } = Ember;

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: `${config.apiEndpoint}/auth/sign_in`,

  makeRequest(data) {
    if (typeof(data) === "object") {
      data = JSON.stringify(data);
    }

    return this._super(data, {
      contentType: 'application/vnd.api+json',
      accept: 'application/vnd.api+json'
    });
  },

  restore(data) {
    return new RSVP.Promise((resolve, reject) => {
      if (!isEmpty(data.accessToken) && !isEmpty(data.expiry) &&
          !isEmpty(data.tokenType) && !isEmpty(data.uid) &&
          !isEmpty(data.client) && !isEmpty(data.userId)) {
            resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      const { identificationAttributeName  } = this.getProperties('identificationAttributeName');
      const data         = { password };
      data[identificationAttributeName] = identification;

      this.makeRequest(data).then(function(response, status, xhr) {
        var result = {
          accessToken: xhr.getResponseHeader('access-token'),
          expiry: xhr.getResponseHeader('expiry'),
          tokenType: xhr.getResponseHeader('token-type'),
          uid: xhr.getResponseHeader('uid'),
          client: xhr.getResponseHeader('client'),
          userId: xhr.getResponseHeader('user-id')
        };

        run(null, resolve, result);
      }, function(xhr) {
        run(null, reject, xhr.responseJSON || xhr.responseText);
      });
    });
  }
});
