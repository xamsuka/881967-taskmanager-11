import BoardNoTaskComponent from '../components/board-no-task';
import BoardComponent from '../components/board';
import LoadButtonComponent from '../components/button-load';
import FormEditTaskComponent from '../components/form-edit';
import SortComponent, {SortType} from '../components/sorting';
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

  _sortingTasks(tasks, sortType, from, to) {
    let sortedTasks = [];
    const sortingTasks = tasks.slice();

    switch (sortType) {
      case SortType.DEFAULT:
        sortedTasks = sortingTasks;
        break;
      case SortType.DATE_UP:
        sortedTasks = sortingTasks.sort((a, b) => a.dueDate - b.dueDate);
        break;
      case SortType.DATE_DOWN:
        sortedTasks = sortingTasks.sort((a, b) => b.dueDate - a.dueDate);
        break;
      default:
        sortedTasks = sortingTasks;
    }

    return sortedTasks.slice(from, to);
  }

  _renderTask(task) {

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

    const renderLoadMoreButton = () => {
      if (showingTasksCount >= tasks.length) {
        return;
      }

      readerElement(this._boardComponent.getElement(), this._loadButtonComponent);

      this._loadButtonComponent.setButtonLoadClick(() => {
        const prevTaskCount = showingTasksCount;
        showingTasksCount += INCREMENT_TASK_ON_NUMBER;
        const sortedTasks = this._sortingTasks(tasks, this._sortComponent._currentSortType, prevTaskCount, showingTasksCount);
        sortedTasks.forEach((task) => readerElement(this._tasksComponent.getElement(), this._renderTask(task)));
        if (showingTasksCount >= tasks.length) {
          remove(this._loadButtonComponent);
        }
      });
    };

    if (isAllArhive) {
      const boardNoComponent = new BoardNoTaskComponent();
      readerElement(this._container, boardNoComponent);
      return;
    } else {
      const siteBoardElement = this._boardComponent.getElement();
      const siteBoardTaskElement = this._tasksComponent.getElement();

      readerElement(this._container, this._boardComponent);
      readerElement(siteBoardElement, this._sortComponent);
      readerElement(siteBoardElement, this._tasksComponent);

      tasks.slice(0, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, this._renderTask(task)));
      renderLoadMoreButton();

      this._sortComponent.setSortTypeClick((sortType) => {
        showingTasksCount = SHOWUNG_TASK_COUNT_START;
        const sortedTasks = this._sortingTasks(tasks, sortType, 0, SHOWUNG_TASK_COUNT_START);
        const taskListElement = this._tasksComponent.getElement();
        taskListElement.innerHTML = ``;

        this.render(sortedTasks);

        renderLoadMoreButton();
      });
    }
  }
}
