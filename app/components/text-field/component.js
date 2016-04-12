import Ember from 'ember';

export default Ember.TextField.extend({
  attributeBindings: [
    'autocorrect',
    'autofocus',
    'data-parsley-trigger',
    'data-parsley-length',
    'data-parsley-length-message',
    'data-parsley-minlength',
    'data-parsley-class-handler',
    'data-parsley-errors-container',
    'data-parsley-equalto',
    'data-parsley-remote'
  ],
  classNames: ['form-control'],
  classNameBindings: ['cssError:error'],

  placeholder: function() {
    if (this.get('placeholderKey')) {
      return this.get('i18n').t(this.get('placeholderKey'));
    } else {
      return '';
    }
  }.property('placeholderKey')

});
