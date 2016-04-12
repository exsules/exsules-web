import BasicRoute from 'exsules/routes/basic';

export default BasicRoute.extend({
  model(params) {
    return this.store.findRecord('user', params.slug);
  }
});
