import MenuComponent from './components/menu';
import Filters from './components/filters';
import BoardComponent from './components/board';
import BoardsComponent from './components/tasks';
import SortComponent from './components/sorting';
import FormEditTaskComponent from './components/form-edit';
import TaskComponent from './components/task';
import LoadButtonComponent from './components/button-load';
import {readerElement, replace} from './utils/render';
import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';

const TASK_COUNT = 20;
const SHOWUNG_TASK_COUNT_START = 8;
const INCREMENT_TASK_ON_NUMBER = 8;

const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);
let showingTasksCount = SHOWUNG_TASK_COUNT_START;

const onButtonLoadClick = (evt) => {
  const target = evt.target;
  const prevTaskCount = showingTasksCount;
  showingTasksCount += INCREMENT_TASK_ON_NUMBER;
  tasks.slice(prevTaskCount, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, renderTask(task)));
  if (showingTasksCount >= tasks.length) {
    target.remove();
  }
};

const mountedTask = (taskComponent, taskEditComponent) => {
  const buttonEdit = taskComponent.getElement().querySelector(`.card__btn--edit`);
  const buttonSave = taskEditComponent.getElement().querySelector(`.card__save`);

  buttonEdit.addEventListener(`click`, () => {
    replace(taskComponent, taskEditComponent);
  });

  buttonSave.addEventListener(`click`, () => {
    replace(taskEditComponent, taskComponent);
  });
};

const renderTask = (task) => {
  const taskComponent = new TaskComponent(task);
  const taskEditComponent = new FormEditTaskComponent(task);

  mountedTask(taskComponent, taskEditComponent);

  return taskComponent;
};

readerElement(siteControlElement, new MenuComponent());
readerElement(siteMainElement, new Filters(filters));
readerElement(siteMainElement, new BoardComponent());

const siteBoardElement = siteMainElement.querySelector(`.board`);

readerElement(siteBoardElement, new BoardsComponent());

const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);

readerElement(siteBoardElement, new SortComponent(), `afterbegin`);
// readerElement(siteBoardTaskElement, new FormEditTaskComponent(tasks[1]));

tasks.slice(0, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, renderTask(task)));

const buttonLoadElement = new LoadButtonComponent();
readerElement(siteBoardElement, buttonLoadElement);
buttonLoadElement.getElement().addEventListener(`click`, onButtonLoadClick);
