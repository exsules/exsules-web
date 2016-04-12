import BasicRoute from 'exsules/routes/basic';

export default BasicRoute.extend({
  model() {
    return this.store.query('user', { sort: 'first-name,last-name' });
  }
});
