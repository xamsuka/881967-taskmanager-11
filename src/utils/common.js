const getRandomValue = (min = 0, max = 100) => {
  return Math.floor(Math.random(min) * max);
};

const gettingRandomBooleanValue = () => {
  return Math.random() > 0.5;
};

const formateTime = (date) => {
  const hourse = String(date.getHours()).padStart(2, ``);
  const minutes = String(date.getMinutes()).padStart(2, `0`);
  return `${hourse}:${minutes}`;
};

export {getRandomValue, gettingRandomBooleanValue, formateTime};
