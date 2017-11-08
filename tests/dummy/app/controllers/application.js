import Controller from '@ember/controller';

const ApplicationController = Controller.extend({
  actions: {
    resize(element) {
      const width = element.width();
      const height = element.height();
      console.log(width, height);
    }
  }
});

export default ApplicationController;
