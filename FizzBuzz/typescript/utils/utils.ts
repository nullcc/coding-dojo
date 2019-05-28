export const dividableBy = (dividend: number, divisor: number): boolean => {
  return dividend % divisor === 0;
};

export const contains = (parameter: number, factor: number): boolean => {
  return parameter.toString().includes(factor.toString());
};
