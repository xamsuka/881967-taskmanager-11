import {createMenuTemplate} from './components/menu';
import {createBoardTemplate} from './components/board';
import {createFilterTemplate} from './components/filters';
import {createSortTemplate} from './components/sorting';
import {createFormEditTemplate} from './components/form-edit';
import {createTaskTemplate} from './components/task';
import {createButtonLoad} from './components/button-load';

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
