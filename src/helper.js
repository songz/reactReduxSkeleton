const getRandomX = () => {
  return Math.floor(Math.random() * 436);
};

const getRandomY = () => {
  return Math.floor(Math.random() * 236);
};

const getRandomDirection = () => {
  return Math.floor(Math.random() * 4);
};

export { getRandomX, getRandomY, getRandomDirection };
