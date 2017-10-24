import Ember from 'ember';
import ResizeSensor from 'resize-sensor';

const { Component } = Ember;

export default class ResizeSensorComponent extends Component {
  didInsertElement() {
    this._resizeSensor = new ResizeSensor(this.element, () => {
      const onResize = this.get('onResize');

      if (typeof onResize === 'function') {
        onResize();
      } else {
        this.sendAction('onResize');
      }
    });
  }
}
