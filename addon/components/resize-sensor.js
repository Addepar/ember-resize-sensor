import Ember from 'ember';
import layout from '../templates/components/resize-sensor';

import ResizeSensor from 'resize-sensor';

export default Ember.Component.extend({
  layout,
  classNames: ['resize-sensor-container'],
  didInsertElement() {
    const element = this.element.children[0];
    this._resizeSensor = new ResizeSensor(element, () => {
      const onResize = this.get('onResize');

      if (typeof onResize === 'function') {
        onResize(element);
      } else {
        this.sendAction('onResize', element);
      }
    });
  }
});
