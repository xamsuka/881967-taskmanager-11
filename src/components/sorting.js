import AbstractComponent from "./abstract-components";

export const SortType = {
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
  DEFAULT: `default`,
};

const createSortTemplate = () => {
  return (`<div class="board__filter-list">
  <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
  <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
  <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
</div>`);
};

export default class Sort extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortTemplate();
  }

  setSortTypeClick(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const sortType = evt.target.getAttribute(`data-sort-type`);

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}
