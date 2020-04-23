import AbstractComponent from "./abstract-components";

const createBoardNoTaskTemplate = () => {
  return (`<p class="board__no-tasks">
  Click «ADD NEW TASK» in menu to create your first task
</p>`);
};

export default class BoardNoTask extends AbstractComponent {
  getTemplate() {
    return createBoardNoTaskTemplate();
  }
}
