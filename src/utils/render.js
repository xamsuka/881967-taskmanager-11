const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

const createElement = (elementMarkup) => {
  const element = document.createElement(`div`);
  element.innerHTML = elementMarkup;

  return element.firstChild;
};

const readerTemplateElement = (container, component, place = `beforeend`) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

export {createElement, readerTemplateElement};
