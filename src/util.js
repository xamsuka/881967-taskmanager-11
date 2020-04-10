const getRandomValue = (min = 0, max = 100) => {
  return Math.floor(Math.random(min) * max);
};

export {getRandomValue};
