import MenuComponent from './components/menu';
import Filters from './components/filters';
import {readerElement} from './utils/render';
import {generateFilters} from './mock/filters';
import {generateTasks} from './mock/task';
import BoardControllerComponent from './controller/board';

const TASK_COUNT = 20;
const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

const siteMainElement = document.querySelector(`main`);
const siteControlElement = siteMainElement.querySelector(`.main__control`);
readerElement(siteControlElement, new MenuComponent());
readerElement(siteMainElement, new Filters(filters));
const boardComponent = new BoardControllerComponent(siteMainElement);

boardComponent.render(tasks);
