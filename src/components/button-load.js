import AbstractComponent from "./abstract-components";

const createButtonLoad = () => {
  return (`<button class="load-more" type="button">load more</button>`);
};

export default class LoadButton extends AbstractComponent {
  getTemplate() {
    return createButtonLoad();
  }

  setButtonLoadClick(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
