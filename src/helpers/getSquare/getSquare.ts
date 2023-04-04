const getSquare = (value: number): number => {
  if (!Number.isInteger(value)) {
    return 0;
  }

  if (value === 1) {
    return 1;
  }

  return Math.pow(value, 2);
};

export default getSquare;
