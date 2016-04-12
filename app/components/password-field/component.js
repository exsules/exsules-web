import TextField from 'exsules/components/text-field/component';

export default TextField.extend({
  canToggle: false,
  type: 'password',

  keypress: function(e) {
    if (e.which >= 65 && e.which <= 90 && !e.shiftKey || e.which >= 97 && e.which <= 122 && e.shiftKey) {
      this.set('canToggle', true);
      this.set('capslockOn', true);
    } else if (e.which >= 65 && e.which <= 90 && e.shiftKey || e.which >= 97 && e.which <= 122 && !e.shiftKey) {
      this.set('canToggle', true);
      this.set('capslockOn', false);
    }
  },

  keyDown: function(e) {
    if (e.which === 20 && this.get('canToggle')) {
      this.toggleProperty('capslockOn');
    }
  },

  focusOut() {
    this.set('capslockOn', false);
  },

  focusIn() {
    this.set('capslockOn', false);
  }

});
