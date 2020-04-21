import MenuComponent from './components/menu';
import Filters from './components/filters';
import BoardComponent from './components/board';
import BoardsComponent from './components/boards';
import SortComponent from './components/sorting';
import FormEditTaskComponent from './components/form-edit';
import TaskComponent from './components/task';
import LoadButtonComponent from './components/button-load';
import {readerElement} from './utils/render';

import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';

const TASK_COUNT = 20;
const MAX_TASK_VIEW = 8;
const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

readerElement(siteControlElement, new MenuComponent());
readerElement(siteMainElement, new Filters(filters));
readerElement(siteMainElement, new BoardComponent());
const siteBoardElement = siteMainElement.querySelector(`.board`);
readerElement(siteBoardElement, new BoardsComponent());
const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);
readerElement(siteBoardElement, new SortComponent(), `afterbegin`);
readerElement(siteBoardTaskElement, new FormEditTaskComponent(tasks[1]));

const showingTasksCount = MAX_TASK_VIEW;
tasks.slice(1, showingTasksCount).forEach((task) => readerElement(siteBoardTaskElement, new TaskComponent(task)));

readerElement(siteBoardElement, new LoadButtonComponent());
