import Ember from 'ember';
import layout from '../templates/components/resize-sensor';

import ResizeSensor from 'resize-sensor';

export default Ember.Component.extend({
  layout,
  classNames: ['resize-sensor-container'],
  didInsertElement() {
    const yieldHtml = this.$().children()[0];
    this._resizeSensor = new ResizeSensor(yieldHtml, () => {
      const onResize = this.get('onResize');
      const $element = $(yieldHtml);

      if (typeof onResize === 'function') {
        onResize($element);
      } else {
        this.sendAction('onResize', $element);
      }
    });
  },
  actions: {
    resize($element) {
      this.sendAction('resize', $element);
    }
  }
});
