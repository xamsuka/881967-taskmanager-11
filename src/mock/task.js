import {COLORS} from '../const';
// import {DAYS} from '../const';
import {getRandomValue} from '../util';

const DescriptionsTask = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

const generateRepeatingDays = () => {
  return {
    mo: Math.random() > 0.5,
    tu: false,
    we: false,
    th: Math.random() > 0.7,
    fr: false,
    sa: false,
    su: Math.random() > 0.9,
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
    description: DescriptionsTask[getRandomValue(0, DescriptionsTask.length)],
    dueDate: Math.random() > 0.5 ? generateRandomDate() : null,
    repeatingDays: Math.random() > 0.5 ? generateRepeatingDays() : null,
    color: COLORS[getRandomValue(0, COLORS.length)],
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
  };
};


const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};

export {generateTask, generateTasks};

