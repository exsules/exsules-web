import BasicRoute from 'exsules/routes/basic';

export default BasicRoute.extend({

  actions: {
    newPost(user, target, message) {
      let post = this.store.createRecord('post',  {
        'from-user-id': user.id,
        message: message,
        user:  target
      });
      post.save();
    },

    addComment(user, text) {
      console.log("he" + user + " " + text);
    }
  }
});
