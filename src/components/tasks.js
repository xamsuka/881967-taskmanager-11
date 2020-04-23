import AbstractComponents from './abstract-components';

const createTasksMarkup = () => {
  return (`<div class="board__tasks"></div>`);
};

export default class Tasks extends AbstractComponents {
  getTemplate() {
    return createTasksMarkup();
  }
}
