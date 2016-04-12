import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    author: { serialize: false },
    username: { serialize: false },
    'comments-count': { serialize: false },
    'likes-count': { serialize: false },
    'reposts-count': { serialize: false },
    'created-at': { serialize: false },
    'updated-at': { serialize: false }
  }

});
