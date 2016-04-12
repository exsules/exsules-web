import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  sortedCommentProps: ['created-at:asc'],
  sortedComments: computed.sort('comment', 'sortedCommentProps'),

  actions: {
    submitComment() {
      console.log("hej");
    }
  }
});
