import BoardNoTaskComponent from '../components/board-no-task';
import BoardComponent from '../components/board';
import LoadButtonComponent from '../components/button-load';
import FormEditTaskComponent from '../components/form-edit';
import SortComponent from '../components/sorting';
import TaskComponent from '../components/task';
import TasksComponent from '../components/tasks';
import {readerElement, replace, remove} from '../utils/render';

import Utils from '../utils/common';

export default class BoardController {
  constructor(container) {
    this._container = container;
    this._boardComponent = new BoardComponent();
    this._sortComponent = new SortComponent();
    this._tasksComponent = new TasksComponent();
    this._formEditTaksComponent = new FormEditTaskComponent();
    this._loadButtonComponent = new LoadButtonComponent();
  }

  renderTask(task) {

    const closeEditWayPoin = () => {
      const buttonSave = document.querySelector(`.card__save`);
      buttonSave.click();
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    const onEscKeyDown = (evt) => {
      const UtilsComponent = new Utils();
      UtilsComponent.isEscPress(evt, closeEditWayPoin);
    };

    const taskComponent = new TaskComponent(task);
    const taskEditComponent = new FormEditTaskComponent(task);

    taskComponent.setEditButtonClick(() => {
      replace(taskComponent, taskEditComponent);
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    taskEditComponent.setButtonSaveClick((evt) => {
      evt.preventDefault();
      replace(taskEditComponent, taskComponent);
    });

    return taskComponent;
  }

  render(tasks) {
    const SHOWUNG_TASK_COUNT_START = 8;
    const INCREMENT_TASK_ON_NUMBER = 8;
    let showingTasksCount = SHOWUNG_TASK_COUNT_START;
    const isAllArhive = Object.keys(tasks).length === 0;

    if (isAllArhive) {
      const boardNoComponent = new BoardNoTaskComponent();
      readerElement(this._container, boardNoComponent);
      return;
    } else {

      readerElement(this._container, this._boardComponent);
      const siteBoardElement = this._container.querySelector(`.board`);

      readerElement(siteBoardElement, this._sortComponent);
      readerElement(siteBoardElement, this._tasksComponent);

      const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);

      tasks.slice(0, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, this.renderTask(task)));

      readerElement(siteBoardElement, this._loadButtonComponent);

      this._loadButtonComponent.setButtonLoadClick(() => {
        const prevTaskCount = showingTasksCount;
        showingTasksCount += INCREMENT_TASK_ON_NUMBER;
        tasks.slice(prevTaskCount, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, this.renderTask(task)));
        if (showingTasksCount >= tasks.length) {
          remove(this._loadButtonComponent);
        }
      });
    }
  }
}
