

import {createMenuTemplate} from './components/site-menu';
import {createBoardTemplate} from './components/site-board';
import {createFilterTemplate} from './components/site-filter';
import {createSortTemplate} from './components/site-sort';
import {createFormEditTemplate} from './components/site-form-edit';
import {createTaskTemplate} from './components/site-task';
import {createButtonLoad} from './components/site-button-load';

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
