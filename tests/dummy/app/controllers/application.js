import Controller from '@ember/controller';

const ApplicationController = Controller.extend({
  actions: {
    resize(element) {
      const width = element.width();
      const height = element.height();
      const size = `${width} X ${height}`;
      this.set('size', size);
    },
  }
});

export default ApplicationController;
