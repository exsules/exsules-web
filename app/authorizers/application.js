import Ember from 'ember';
import Devise from 'ember-simple-auth/authorizers/devise';

const { isEmpty } = Ember;

export default Devise.extend({

  authorize(data, block) {
    const accessToken = data.accessToken;
    const expiry = data.expiry;
    const tokenType = data.tokenType;
    const uid = data.uid;
    const client = data.client;
    const userId = data.userId;

    if (!isEmpty(accessToken) && !isEmpty(expiry) &&
        !isEmpty(tokenType) && !isEmpty(uid) && !isEmpty(client)) {
          block('client', client);
          block('access-token', accessToken);
          block('token-type', tokenType);
          block('uid', uid);
          block('expiry', expiry);
          block('user-id', userId);
    }

  }

});
