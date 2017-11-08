import Ember from 'ember';
import layout from '../templates/components/resize-sensor';

import ResizeSensor from 'resize-sensor';

export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this._resizeSensor = new ResizeSensor(this.element, () => {
      const onResize = this.get('onResize');
      const $element = this.$();

      if (typeof onResize === 'function') {
        onResize($element);
      } else {
        this.sendAction('onResize', $element);
      }
    });
  }
});
