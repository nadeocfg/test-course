const validateValue = (value: number) => {
  const formattedValue = value ?? undefined === undefined;

  if (formattedValue === undefined || typeof value !== "number") {
    return false;
  }

  if (value < 0 || value > 100) {
    return false;
  }

  return true;
};

export default validateValue;
