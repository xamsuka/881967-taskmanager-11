import {DAYS} from '../const';
import {COLORS} from '../const';
import {MONTH_NAMES} from '../const';
import {formateTime} from '../utils/common';
import TaskComponent from './task';

const createRepeatingDaysMarkup = (task, repeatingDays) => {
  const repeatingMarkup = DAYS.map((day) => {
    return (`
    <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-${day}-4" name="repeat" value="${day}" ${repeatingDays[day] ? `checked` : ``}/>
    <label class="card__repeat-day" for="repeat-${day}-4">${day}</label>
    `);
  }).join(` `);

  return repeatingMarkup;
};

const createColorsMarkup = (colors, colorTask) => {
  const colorsMarkup = COLORS.map((color) => {
    return (`<input type="radio" id="color-${color}-4" class="card__color-input card__color-input--${color} visually-hidden" name="color"
  value="${color}" ${colorTask === color ? `checked` : ``}/>
    <label for="color-${color}-4" class="card__color card__color--${color}">${color}</label>`);
  }).join(``);

  return colorsMarkup;
};

const createFormEditTemplate = (task) => {
  const {description, dueDate, repeatingDays, color} = task;

  const repeating = repeatingDays === null ? `` : `card--repeat`;
  const isExpired = dueDate < Date.now();
  const isShowing = !!dueDate;
  const isRepeating = !!repeatingDays;

  const classDeadline = isExpired && isShowing ? `card--deadline` : ``;
  const date = isShowing ? `${dueDate.getDate()} ` + Array.from(MONTH_NAMES)[dueDate.getMonth()] : ``;
  const time = isShowing ? formateTime(dueDate) : ``;


  const repeatingDaysMarkup = isRepeating ? createRepeatingDaysMarkup(task, repeatingDays) : ``;
  const colorsMarkup = createColorsMarkup(COLORS, color);

  return (`<article class="card card--edit card--${color} ${repeating} ${classDeadline}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >${description}</textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${isShowing ? `yes` : `no`}</span>
              </button>

              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder=""
                    name="date"
                    value="${date + ` ` + time}"
                  />
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">${isRepeating ? `yes` : `no`}</span>
              </button>

              <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner">
                  ${repeatingDaysMarkup}
                </div>
              </fieldset>
            </div>
          </div>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              ${colorsMarkup}
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`);
};

export default class FormEditTask extends TaskComponent {
  getTemplate() {
    return createFormEditTemplate(this._task);
  }
}
