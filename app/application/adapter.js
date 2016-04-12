import DS from 'ember-data';
import config from 'exsules/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.apiEndpoint,
  namespace: config.apiVersion,

  headers: {
    'accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  },
  authorizer: 'authorizer:application'
});
