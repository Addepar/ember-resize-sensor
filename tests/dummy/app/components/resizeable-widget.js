import Ember from 'ember';
import { computed } from '@ember/object';
import layout from '../templates/components/resizeable-widget';

export default Ember.Component.extend({
  layout,
  classNames: ['rezisable-widget-container'],

  didInsertElement() {
    this._super(...arguments);

    const element = this.element;
    this.$('#rezisable-widget').resizable({});
    this.sendAction('resize', element);
  }
});
