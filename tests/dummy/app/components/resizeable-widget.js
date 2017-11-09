import Ember from 'ember';
import layout from '../templates/components/resizeable-widget';
// import jqUI from 'jquery-ui';

export default Ember.Component.extend({
  layout,
  classNames: ['rezisable-widget-container'],

  didInsertElement() {
    this._super(...arguments);

    const element = this.element;
    // this.$('#rezisable-widget').resizable({});
    this.sendAction('resize', element);
  }
});
