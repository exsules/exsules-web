import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('settings');
  this.route('user', { path: '/:slug' }, function() {
    this.route('about');
    this.route('posts');
    this.route('photos');
    this.route('videos');
    this.route('friends');
    this.route('likes');
  });
  this.route('register');
});

export default Router;
