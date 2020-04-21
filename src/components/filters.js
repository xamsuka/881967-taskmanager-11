import AbstractComponent from "./abstract-components";

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (`<input type="radio" id="filter__${name}" class="filter__input visually-hidden" name="filter" ${isChecked ? `checked` : ``} />
           <label for="filter__${name}" class="filter__label">
        ${name} <span class="filter__${name}-count">${count}</span></label>`);
};

const createFilterTemplate = (filters) => {
  const filterMarkup = filters.map((filter, i) => createFilterMarkup(filter, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filterMarkup}
    </section>`
  );
};

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }
  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
