import {MONTH_NAMES} from '../const';
import {formateTime, createElement} from '../utils/common';

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

  return (
    `<article class="card card--${color} ${repeating} ${classDeadline}">
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
  </article>`
  );
};

class TaskComponent {
  constructor(task) {
    this._task = task;
    this._element = null;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
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

export {createTaskTemplate, TaskComponent};
