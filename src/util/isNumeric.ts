const isNumeric = (str: string) => {
  if (typeof str !== 'string') return false;
  return !isNaN(parseFloat(str));
};

export default isNumeric;
