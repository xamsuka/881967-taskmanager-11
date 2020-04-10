import {generateFilters} from '../mock/filters';

const createFiltersMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (`
  <input type="radio" id="filter__${name}" class="filter__input visually-hidden" name="filter" ${isChecked ? `checked` : ``} />
  <label for="filter__${name}" class="filter__label">
  ${name} <span class="filter__${name}-count">${count}</span></label>
  `);
};

const createFilterTemplate = () => {
  const filters = generateFilters();

  // Код ниже -> Рабочий код, если потребуется в фильтре 'ALL' отобразить количество всех задач
  /*
  const filterMarkup = filters.map((filter, i) => {
    if (i === 0) {
      const valueAllTasks = filters.map((it) => it.count).reduce((acc, currentValue) => acc + currentValue);
      filter.count = valueAllTasks - filters[0].count;
      return createFiltersMarkup(filter, true);
    } return createFiltersMarkup(filter);
  }).join(`\n`);
  */
  const filterMarkup = filters.map((filter, i) => createFiltersMarkup(filter, i === 0)).join(`\n`);

  return (
    `
    <section class="main__filter filter container">
      ${filterMarkup}
    </section>
    `
  );
};

export {createFilterTemplate};
