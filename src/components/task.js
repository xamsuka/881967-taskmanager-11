import {MONTH_NAMES} from '../const';
import {formateTime} from '../utils/common';
import AbstractComponent from './abstract-components';

const createTaskTemplate = (task) => {
  const {description, dueDate, repeatingDays, color, isFavorite, isArchive} = task;
  const repeating = repeatingDays === null ? `` : `card--repeat`;
  const isExpired = dueDate < Date.now();
  const isShowing = !!dueDate;
  const classDeadline = isExpired && isShowing ? `card--deadline` : ``;
  const classArchive = isArchive ? `card__btn--disabled` : ``;
  const classFavorite = isFavorite ? `card__btn--disabled` : ``;
  const date = isShowing ? `${dueDate.getDate()} ` + Array.from(MONTH_NAMES)[dueDate.getMonth()] : ``;
  const time = isShowing ? formateTime(dueDate) : ``;

  return (`<article class="card card--${color} ${repeating} ${classDeadline}">
      <div class="card__form">
      <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive ${classArchive}">
          archive
        </button>
        <button type="button" class="card__btn card__btn--favorites ${classFavorite}">
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <p class="card__text">${description}
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <div class="card__date-deadline">
              <p class="card__input-deadline-wrap">
                <span class="card__date">${date}</span>
                <span class="card__time">${time}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  </article>`);
};

export default class Task extends AbstractComponent {
  constructor(task) {
    super();
    this._task = task;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }

  setEditButtonClick(handler) {
    const taskElement = this.getElement();
    const buttonEditElement = taskElement.querySelector(`.card__btn--edit`);
    buttonEditElement.addEventListener(`click`, handler);
  }
}
