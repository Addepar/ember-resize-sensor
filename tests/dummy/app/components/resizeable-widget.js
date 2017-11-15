import Component from '@ember/component';

export default Component.extend({
  classNames: ['rezisable-widget-container'],

  didInsertElement() {
    this._super(...arguments);

    const element = this.element;
    this.$('#rezisable-widget').resizable({
      minHeight: 150,
      minWidth: 200
    });
    this.sendAction('resize', element);
  }
});
