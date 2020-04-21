import {createElement} from '../utils/render';

const createBoardTemplate = () => {
  return (
    `<section class="board container">
      <div class="board__tasks">
      </div>
     </section>`
  );
};

class BoardComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export {createBoardTemplate, BoardComponent};
