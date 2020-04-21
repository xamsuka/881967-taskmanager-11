import AbstractComponents from './abstract-components';

const createBoardsMarkup = () => {
  return (`<div class="board__tasks"></div>`);
};

export default class Boards extends AbstractComponents {
  getTemplate() {
    return createBoardsMarkup();
  }
}
