import {COLORS} from '../const';
import {getRandomValue, gettingRandomBooleanValue} from '../utils/common';

const descriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

const generateRepeatingDays = () => {
  return {
    mo: gettingRandomBooleanValue(),
    tu: true,
    we: false,
    th: gettingRandomBooleanValue(),
    fr: false,
    sa: false,
    su: gettingRandomBooleanValue(),
  };
};

const generateRandomDate = () => {
  const date = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomValue(0, 8);
  date.setDate(date.getDate() + diffValue);
  return date;
};

const generateTask = () => {
  return {
    description: descriptions[getRandomValue(0, descriptions.length)],
    dueDate: gettingRandomBooleanValue() ? generateRandomDate() : null,
    repeatingDays: gettingRandomBooleanValue() ? generateRepeatingDays() : null,
    color: COLORS[getRandomValue(0, COLORS.length)],
    isFavorite: gettingRandomBooleanValue(),
    isArchive: gettingRandomBooleanValue(),
  };
};


const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};

export {generateTask, generateTasks};

