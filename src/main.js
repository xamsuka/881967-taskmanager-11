import {createMenuTemplate} from './components/menu';
import {createBoardTemplate} from './components/board';
import {createFilterTemplate} from './components/filters';
import {createSortTemplate} from './components/sorting';
import {createFormEditTemplate} from './components/form-edit';
import {createTaskTemplate} from './components/task';
import {createButtonLoad} from './components/button-load';

import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';

const TASK_COUNT = 20;
const MAX_TASK_VIEW = 8;
const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);
const readerTemplateElement = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

readerTemplateElement(siteControlElement, createMenuTemplate());
readerTemplateElement(siteMainElement, createFilterTemplate(filters));
readerTemplateElement(siteMainElement, createBoardTemplate());
const siteBoardElement = document.querySelector(`.board`);
const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);
readerTemplateElement(siteBoardElement, createSortTemplate(), `afterbegin`);
readerTemplateElement(siteBoardTaskElement, createFormEditTemplate());

const showingTasksCount = MAX_TASK_VIEW;

tasks.slice(1, showingTasksCount).forEach((task) => readerTemplateElement(siteBoardTaskElement, createTaskTemplate(task)));

readerTemplateElement(siteBoardElement, createButtonLoad());
