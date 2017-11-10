import Component from '@ember/component';

import ResizeSensor from 'resize-sensor';

export default Component.extend({
  classNames: ['resize-sensor-container'],

  didInsertElement() {
    const element = this.element;
    this._resizeSensor = new ResizeSensor(element, () => {
      const onResize = this.get('onResize');

      if (typeof onResize === 'function') {
        onResize(element);
      } else {
        this.sendAction('onResize', element);
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    
    const element = this.element;
    this._resizeSensor.detach(element);
  }
});
