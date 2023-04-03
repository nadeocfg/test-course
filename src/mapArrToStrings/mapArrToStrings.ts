const mapArrToStrings = (arr: number[]) => {
  if (!arr) {
    return [];
  }

  return arr.filter((item) => Number.isInteger(item)).map(String);
};

export default mapArrToStrings;
