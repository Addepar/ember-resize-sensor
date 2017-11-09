import Controller from '@ember/controller';

const ApplicationController = Controller.extend({
  actions: {
    resize(element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const size = `${width} X ${height}`;
      this.set('size', size);
    },
  }
});

export default ApplicationController;
