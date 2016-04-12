import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  sortedPostsProps: ['created-at:desc'],
  sortedPosts: computed.sort('post', 'sortedPostsProps')
});
