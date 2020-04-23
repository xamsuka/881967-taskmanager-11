const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const createElement = (elementMarkup) => {
  const element = document.createElement(`div`);
  element.innerHTML = elementMarkup;

  return element.firstChild;
};

const readerElement = (container, component, place = `beforeend`) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

const replace = (newComponent, oldComponent) => {
  const parentElement = newComponent.getElement().parentElement;
  const newChild = newComponent.getElement();
  const oldChild = oldComponent.getElement();
  parentElement.replaceChild(oldChild, newChild);
};

export {createElement, readerElement, replace};
