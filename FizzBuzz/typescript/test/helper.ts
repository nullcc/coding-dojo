import { dividableBy, contains } from '../utils/utils';

const isFizzForStage1 = (input: number): boolean => {
  return dividableBy(input, 3);
};

const isBuzzForStage1 = (input: number): boolean => {
  return dividableBy(input, 5);
};

const isFizzBuzzForStage1 = (input: number): boolean => {
  return dividableBy(input, 3) && dividableBy(input, 5);
};

export const getExpectedValueForStage1 = (input: number) => {
  if (isFizzBuzzForStage1(input)) {
    return 'FizzBuzz';
  }
  if (isFizzForStage1(input)) {
    return 'Fizz';
  }
  if (isBuzzForStage1(input)) {
    return 'Buzz';
  }
  return input;
};

const isFizzForStage2 = (input: number): boolean => {
  return dividableBy(input, 3) || contains(input, 3);
};

const isBuzzForStage2 = (input: number): boolean => {
  return dividableBy(input, 5) || contains(input, 5);
};

const isFizzBuzzForStage2 = (input: number): boolean => {
  return isFizzForStage2(input) && isBuzzForStage2(input);
};

export const getExpectedValueForStage2 = (input: number) => {
  if (isFizzBuzzForStage2(input)) {
    return 'FizzBuzz';
  }
  if (isFizzForStage2(input)) {
    return 'Fizz';
  }
  if (isBuzzForStage2(input)) {
    return 'Buzz';
  }
  return input;
};
