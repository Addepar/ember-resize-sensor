import Component from '@ember/component';
import { next } from "@ember/runloop"

import ResizeSensor from 'resize-sensor';

export default Component.extend({
  classNames: ['resize-sensor-container'],

  didInsertElement() {
    const { element } = this;
    this._resizeSensor = new ResizeSensor(element, () => {
      next(this, () => {
        const onResize = this.get('onResize');
        
        if (typeof onResize === 'function') {
          onResize(element);
        } else {
          this.sendAction('onResize', element);
        }
      })
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    
    this._resizeSensor.detach(this.element);
  }
});
