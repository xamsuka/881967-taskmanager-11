const getRandomValue = (min = 0, max = 100) => {
  return Math.floor(Math.random(min) * max);
};

const formateTime = (date) => {
  const hourse = date.getHours();
  const minutes = date.getMinutes();
  return `${hourse}:${minutes}`;
};

export {getRandomValue, formateTime};
