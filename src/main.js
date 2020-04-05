import {createMenuTemplate} from './components/create-menu-template';
import {createBoardTemplate} from './components/create-board-template';
import {createFilterTemplate} from './components/create-filter-template';
import {createSortTemplate} from './components/create-sort-template';
import {createFormEditTemplate} from './components/create-form-edit-template';
import {createTaskTemplate} from './components/create-task-template';
import {createButtonLoad} from './components/create-button-load';

const MAX_TASK_VIEW = 3;
const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);


const readerTemplateElement = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

readerTemplateElement(siteControlElement, createMenuTemplate());
readerTemplateElement(siteMainElement, createFilterTemplate());
readerTemplateElement(siteMainElement, createBoardTemplate());
const siteBoardElement = document.querySelector(`.board`);
const siteBoardTaskElement = siteBoardElement.querySelector(`.board__tasks`);
readerTemplateElement(siteBoardElement, createSortTemplate(), `afterbegin`);
readerTemplateElement(siteBoardTaskElement, createFormEditTemplate());

for (let i = 0; i < MAX_TASK_VIEW; i++) {
  readerTemplateElement(siteBoardTaskElement, createTaskTemplate());
}

readerTemplateElement(siteBoardElement, createButtonLoad());
