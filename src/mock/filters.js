const FILTER_NAMES = [`ALL`, `OVERDUE`, `TODAY`, `FAVORITES`, `REPEATING`, `ARCHIVE`];

import {getRandomValue} from '../utils/common';

const generateFilters = () => {
  return FILTER_NAMES.map((filter) => {
    return {
      name: filter.toLocaleLowerCase(),
      count: getRandomValue(),
    };
  });
};

export {generateFilters};
