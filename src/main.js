import {createMenuTemplate} from './components/menu';
import {createBoardTemplate, BoardComponent} from './components/board';
import {createFilterTemplate} from './components/filters';
import {createSortTemplate} from './components/sorting';
import {createFormEditTemplate} from './components/form-edit';
import {createTaskTemplate, TaskComponent} from './components/task';
import {createButtonLoad} from './components/button-load';
import {readerTemplateElement} from './utils/render';

import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';

const TASK_COUNT = 20;
const MAX_TASK_VIEW = 8;
const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const boardComponent = new BoardComponent();
const readerTemplateElement2 = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

readerTemplateElement2(siteControlElement, createMenuTemplate());
readerTemplateElement2(siteMainElement, createFilterTemplate(filters));
readerTemplateElement(siteMainElement, boardComponent);
// const siteBoardElement = document.querySelector(`.board`);
// const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);
// readerTemplateElement(siteBoardElement, createSortTemplate(), `afterbegin`);
// readerTemplateElement(siteBoardTaskElement, createFormEditTemplate(tasks[1]));

const showingTasksCount = MAX_TASK_VIEW;
// tasks.slice(1, showingTasksCount).forEach((task) => readerTemplateElement(siteMainElement, new TaskComponent(task)));

// readerTemplateElement(siteBoardElement, createButtonLoad());
